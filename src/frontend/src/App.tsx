import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Loader2,
  Menu,
  Pause,
  Play,
  RefreshCw,
  Search,
  SkipBack,
  SkipForward,
  Square,
  Volume2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Testament, kjvBible } from "./bibleData";
import type { Book, Chapter } from "./bibleData";
import { retryBibleLoad, useBibleLoader } from "./hooks/useBibleLoader";
import { useAllBooks, useSeedBibleData } from "./hooks/useQueries";
import { useTTS } from "./hooks/useTTS";

// Local storage keys
const LS_BOOK = "bible_book";
const LS_CHAPTER = "bible_chapter";

interface Position {
  bookAbbrev: string;
  chapterIndex: number;
}

function getLocalBook(): Position {
  try {
    const b = localStorage.getItem(LS_BOOK);
    const c = localStorage.getItem(LS_CHAPTER);
    if (b) return { bookAbbrev: b, chapterIndex: c ? Number.parseInt(c) : 0 };
  } catch {}
  return { bookAbbrev: "gen", chapterIndex: 0 };
}

function saveLocalPosition(bookAbbrev: string, chapterIndex: number) {
  try {
    localStorage.setItem(LS_BOOK, bookAbbrev);
    localStorage.setItem(LS_CHAPTER, chapterIndex.toString());
  } catch {}
}

export default function App() {
  // ── Bible data loading ─────────────────────────────────────────────────────
  const [retryKey, setRetryKey] = useState(0);
  const { books: loadedBooks, isLoading, error } = useBibleLoader();

  // The active book list: loaded data if available, placeholder otherwise
  const activeBooks = loadedBooks.length > 0 ? loadedBooks : kjvBible;

  // ── UI state ───────────────────────────────────────────────────────────────
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [expandedTestament, setExpandedTestament] = useState<{
    old: boolean;
    new: boolean;
  }>({ old: true, new: true });
  const [expandedBook, setExpandedBook] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [ttsRate, setTtsRate] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const verseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const readerRef = useRef<HTMLDivElement>(null);

  const { data: backendBooks } = useAllBooks();
  const seedMutation = useSeedBibleData();

  const seedMutate = seedMutation.mutate;

  // Seed backend data only after full books are loaded
  useEffect(() => {
    if (
      loadedBooks.length > 0 &&
      backendBooks !== undefined &&
      backendBooks.length === 0
    ) {
      seedMutate(loadedBooks as Book[]);
    }
  }, [loadedBooks, backendBooks, seedMutate]);

  // Load saved position — re-run when full data arrives so chapters populate
  useEffect(() => {
    if (activeBooks.length === 0) return;
    const pos = getLocalBook();
    const book = activeBooks.find((b) => b.abbreviation === pos.bookAbbrev);
    if (book) {
      setSelectedBook(book);
      setSelectedChapterIndex(pos.chapterIndex);
      setExpandedBook(book.abbreviation);
    } else {
      setSelectedBook(activeBooks[0]);
      setSelectedChapterIndex(0);
      setExpandedBook(activeBooks[0].abbreviation);
    }
  }, [activeBooks]);

  // When full books load, update the selected book reference so chapters work.
  // We compare chapter counts to avoid an infinite re-render loop: once the
  // loaded book has more chapters than the placeholder (0), we swap it in.
  useEffect(() => {
    if (loadedBooks.length === 0 || !selectedBook) return;
    const abbrev = selectedBook.abbreviation;
    const fresh = loadedBooks.find((b) => b.abbreviation === abbrev);
    if (fresh && fresh.chapters.length !== selectedBook.chapters.length) {
      setSelectedBook(fresh);
    }
  }, [loadedBooks, selectedBook]);

  const currentChapter: Chapter | null =
    selectedBook?.chapters[selectedChapterIndex] ?? null;

  const verseTexts =
    currentChapter?.verses.map((v) => `Verse ${v.number}. ${v.text}`) ?? [];

  const tts = useTTS({
    rate: ttsRate,
    onVerseChange: (idx) => {
      const el = verseRefs.current[idx];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
  });

  const handleBookSelect = useCallback(
    (book: Book) => {
      if (selectedBook?.abbreviation !== book.abbreviation) {
        tts.stop();
        setSelectedBook(book);
        setSelectedChapterIndex(0);
        saveLocalPosition(book.abbreviation, 0);
      }
      setSidebarOpen(false);
    },
    [selectedBook, tts],
  );

  const handleChapterSelect = useCallback(
    (chapterIndex: number) => {
      tts.stop();
      setSelectedChapterIndex(chapterIndex);
      if (selectedBook)
        saveLocalPosition(selectedBook.abbreviation, chapterIndex);
      if (readerRef.current) {
        readerRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
      setSidebarOpen(false);
    },
    [selectedBook, tts],
  );

  const handlePrevChapter = useCallback(() => {
    if (!selectedBook) return;
    if (selectedChapterIndex > 0) {
      handleChapterSelect(selectedChapterIndex - 1);
    } else {
      const bookIdx = activeBooks.findIndex(
        (b) => b.abbreviation === selectedBook.abbreviation,
      );
      if (bookIdx > 0) {
        const prevBook = activeBooks[bookIdx - 1];
        tts.stop();
        setSelectedBook(prevBook);
        setSelectedChapterIndex(prevBook.chapters.length - 1);
        setExpandedBook(prevBook.abbreviation);
        saveLocalPosition(prevBook.abbreviation, prevBook.chapters.length - 1);
      }
    }
  }, [
    selectedBook,
    selectedChapterIndex,
    handleChapterSelect,
    tts,
    activeBooks,
  ]);

  const handleNextChapter = useCallback(() => {
    if (!selectedBook) return;
    if (selectedChapterIndex < selectedBook.chapters.length - 1) {
      handleChapterSelect(selectedChapterIndex + 1);
    } else {
      const bookIdx = activeBooks.findIndex(
        (b) => b.abbreviation === selectedBook.abbreviation,
      );
      if (bookIdx < activeBooks.length - 1) {
        const nextBook = activeBooks[bookIdx + 1];
        tts.stop();
        setSelectedBook(nextBook);
        setSelectedChapterIndex(0);
        setExpandedBook(nextBook.abbreviation);
        saveLocalPosition(nextBook.abbreviation, 0);
      }
    }
  }, [
    selectedBook,
    selectedChapterIndex,
    handleChapterSelect,
    tts,
    activeBooks,
  ]);

  const handleSearch = useCallback(() => {
    setActiveSearch(searchQuery.trim());
  }, [searchQuery]);

  const searchResults = useCallback(() => {
    if (!activeSearch || activeSearch.length < 2) return [];
    const query = activeSearch.toLowerCase();
    const results: Array<{
      book: Book;
      chapterIndex: number;
      verseIndex: number;
      verseNum: bigint;
      text: string;
    }> = [];

    for (const book of activeBooks) {
      for (let ci = 0; ci < book.chapters.length; ci++) {
        const chapter = book.chapters[ci];
        for (let vi = 0; vi < chapter.verses.length; vi++) {
          const verse = chapter.verses[vi];
          if (verse.text.toLowerCase().includes(query)) {
            results.push({
              book,
              chapterIndex: ci,
              verseIndex: vi,
              verseNum: verse.number,
              text: verse.text,
            });
            if (results.length >= 50) break;
          }
        }
        if (results.length >= 50) break;
      }
      if (results.length >= 50) break;
    }
    return results;
  }, [activeSearch, activeBooks])();

  const oldTestamentBooks = activeBooks.filter(
    (b) => b.testament === Testament.Old,
  );
  const newTestamentBooks = activeBooks.filter(
    (b) => b.testament === Testament.New,
  );

  const isSearchMode = activeSearch.length >= 2;

  // ── Full-screen loading screen ─────────────────────────────────────────────
  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center gap-6"
        data-ocid="app.loading_state"
      >
        <img
          src="/assets/generated/bible-logo-transparent.dim_80x80.png"
          alt="Sacred Scripture"
          className="h-16 w-16 rounded-xl opacity-80"
        />
        <div className="text-center space-y-2">
          <h1 className="font-display text-3xl font-semibold text-primary glow-text">
            Sacred Scripture
          </h1>
          <p className="text-sm text-muted-foreground">King James Version</p>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin text-primary/70" />
          <span className="text-sm font-medium">Loading scriptures…</span>
        </div>
        {/* Progress bar decoration */}
        <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary/60 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.6,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    );
  }

  // ── Error screen ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4"
        data-ocid="app.error_state"
      >
        <AlertTriangle className="h-12 w-12 text-destructive/70" />
        <div className="text-center space-y-2 max-w-sm">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Could not load scriptures
          </h2>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
        <Button
          onClick={() => {
            retryBibleLoad();
            setRetryKey((k) => k + 1);
          }}
          className="gap-2"
          data-ocid="app.retry.button"
          key={retryKey}
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  // ── Main app ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col noise-bg">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <img
            src="/assets/generated/bible-logo-transparent.dim_80x80.png"
            alt="Sacred Scripture"
            className="h-8 w-8 rounded"
          />
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-xl font-semibold text-primary leading-none glow-text truncate">
              Sacred Scripture
            </h1>
            <p className="text-xs text-muted-foreground">King James Version</p>
          </div>
          {selectedBook && (
            <div className="hidden sm:flex items-center gap-2">
              <Badge
                variant="outline"
                className="text-xs border-primary/30 text-primary/80"
              >
                {selectedBook.name}{" "}
                {currentChapter ? `${currentChapter.number}` : ""}
              </Badge>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ x: sidebarOpen ? 0 : undefined }}
          className={[
            "w-72 border-r border-border bg-sidebar flex-shrink-0 flex flex-col",
            "fixed md:relative inset-y-0 left-0 z-40 md:z-auto",
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0",
            "transition-transform duration-300 md:transition-none",
          ].join(" ")}
          style={{ top: "57px", height: "calc(100vh - 57px)" }}
        >
          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search scriptures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-8 h-8 text-sm bg-input/50 border-border/60 focus:border-primary/50"
                  data-ocid="search.input"
                />
              </div>
              {activeSearch ? (
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 shrink-0"
                  onClick={() => {
                    setActiveSearch("");
                    setSearchQuery("");
                  }}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              ) : (
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 shrink-0"
                  onClick={handleSearch}
                >
                  <Search className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          </div>

          {/* Navigation content */}
          <ScrollArea className="flex-1">
            <AnimatePresence mode="wait">
              {isSearchMode ? (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="p-2"
                >
                  <div className="flex items-center gap-2 px-2 py-1 mb-2">
                    <Search className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {searchResults.length} results for &ldquo;{activeSearch}
                      &rdquo;
                    </span>
                  </div>
                  {searchResults.length === 0 ? (
                    <div
                      className="text-center py-6 text-muted-foreground text-sm"
                      data-ocid="search.empty_state"
                    >
                      No verses found
                    </div>
                  ) : (
                    searchResults.map((result, idx) => (
                      <motion.button
                        type="button"
                        key={`${result.book.abbreviation}-${result.chapterIndex}-${result.verseIndex}`}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.02 }}
                        className="w-full text-left px-2 py-2 rounded hover:bg-accent/30 transition-colors group mb-1"
                        data-ocid={`search.results.item.${idx + 1}`}
                        onClick={() => {
                          tts.stop();
                          setSelectedBook(result.book);
                          setSelectedChapterIndex(result.chapterIndex);
                          setExpandedBook(result.book.abbreviation);
                          saveLocalPosition(
                            result.book.abbreviation,
                            result.chapterIndex,
                          );
                          setActiveSearch("");
                          setSearchQuery("");
                          setSidebarOpen(false);
                        }}
                      >
                        <div className="text-xs font-semibold text-primary mb-0.5">
                          {result.book.name}{" "}
                          {result.book.chapters[result.chapterIndex].number}:
                          {result.verseNum.toString()}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground transition-colors">
                          {result.text}
                        </div>
                      </motion.button>
                    ))
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="navigation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Old Testament */}
                  <div>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-accent/20 transition-colors"
                      onClick={() =>
                        setExpandedTestament((p) => ({ ...p, old: !p.old }))
                      }
                      data-ocid="nav.old_testament.toggle"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                          Old Testament
                        </span>
                        <span className="text-xs text-muted-foreground">
                          (39)
                        </span>
                      </div>
                      {expandedTestament.old ? (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedTestament.old && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {oldTestamentBooks.map((book, idx) => (
                            <BookNavItem
                              key={book.abbreviation}
                              book={book}
                              index={idx}
                              isSelected={
                                selectedBook?.abbreviation === book.abbreviation
                              }
                              isExpanded={expandedBook === book.abbreviation}
                              selectedChapterIndex={selectedChapterIndex}
                              onBookClick={() => {
                                if (expandedBook === book.abbreviation) {
                                  setExpandedBook(null);
                                } else {
                                  setExpandedBook(book.abbreviation);
                                  handleBookSelect(book);
                                }
                              }}
                              onChapterClick={(ci) => {
                                handleBookSelect(book);
                                handleChapterSelect(ci);
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Separator className="my-1 opacity-30" />

                  {/* New Testament */}
                  <div>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-accent/20 transition-colors"
                      onClick={() =>
                        setExpandedTestament((p) => ({ ...p, new: !p.new }))
                      }
                      data-ocid="nav.new_testament.toggle"
                    >
                      <div className="flex items-center gap-2">
                        <BookMarked className="h-3.5 w-3.5 text-primary/70" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                          New Testament
                        </span>
                        <span className="text-xs text-muted-foreground">
                          (27)
                        </span>
                      </div>
                      {expandedTestament.new ? (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedTestament.new && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {newTestamentBooks.map((book, idx) => (
                            <BookNavItem
                              key={book.abbreviation}
                              book={book}
                              index={idx}
                              isSelected={
                                selectedBook?.abbreviation === book.abbreviation
                              }
                              isExpanded={expandedBook === book.abbreviation}
                              selectedChapterIndex={selectedChapterIndex}
                              onBookClick={() => {
                                if (expandedBook === book.abbreviation) {
                                  setExpandedBook(null);
                                } else {
                                  setExpandedBook(book.abbreviation);
                                  handleBookSelect(book);
                                }
                              }}
                              onChapterClick={(ci) => {
                                handleBookSelect(book);
                                handleChapterSelect(ci);
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollArea>
        </motion.aside>

        {/* Main Reader */}
        <main className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* TTS Controls Bar */}
          <div className="border-b border-border bg-card/60 backdrop-blur-sm px-4 py-2 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={handlePrevChapter}
                disabled={!selectedBook}
                data-ocid="reader.prev_chapter.button"
                title="Previous chapter"
              >
                <SkipBack className="h-4 w-4" />
              </Button>

              <Button
                size="sm"
                className={[
                  "h-8 px-3 gap-1.5 font-body font-medium",
                  tts.isPlaying
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : tts.isPaused
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30",
                ].join(" ")}
                onClick={() => {
                  if (tts.isIdle) {
                    tts.play(verseTexts);
                  } else if (tts.isPlaying) {
                    tts.pause();
                  } else {
                    tts.resume();
                  }
                }}
                disabled={!currentChapter || verseTexts.length === 0}
                data-ocid="reader.play_button"
              >
                {tts.isPlaying ? (
                  <>
                    <Pause className="h-3.5 w-3.5" /> Pause
                  </>
                ) : tts.isPaused ? (
                  <>
                    <Play className="h-3.5 w-3.5" /> Resume
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" /> Read Aloud
                  </>
                )}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={tts.stop}
                disabled={tts.isIdle}
                data-ocid="reader.stop_button"
                title="Stop"
              >
                <Square className="h-3.5 w-3.5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={handleNextChapter}
                disabled={!selectedBook}
                data-ocid="reader.next_chapter.button"
                title="Next chapter"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            <Separator
              orientation="vertical"
              className="h-6 opacity-30 hidden sm:block"
            />

            {/* Speed control */}
            <div
              className="hidden sm:flex items-center gap-2"
              data-ocid="reader.speed.select"
            >
              <Volume2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span className="text-xs text-muted-foreground w-10 shrink-0">
                {ttsRate.toFixed(1)}×
              </span>
              <div className="w-24">
                <Slider
                  min={0.5}
                  max={2}
                  step={0.1}
                  value={[ttsRate]}
                  onValueChange={([v]) => {
                    setTtsRate(v);
                    if (tts.isPlaying) {
                      const idx = tts.currentVerseIndex;
                      setTimeout(
                        () => tts.play(verseTexts, Math.max(0, idx)),
                        50,
                      );
                    }
                  }}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {tts.isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-auto flex items-center gap-1.5 text-xs text-primary"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                  className="h-2 w-2 rounded-full bg-primary"
                />
                Verse {tts.currentVerseIndex + 1} of {verseTexts.length}
              </motion.div>
            )}
          </div>

          {/* Reader Area */}
          <div ref={readerRef} className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {!selectedBook ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground p-8"
                  data-ocid="reader.empty_state"
                >
                  <BookOpen className="h-16 w-16 opacity-20" />
                  <p className="font-display text-2xl opacity-40">
                    Select a book to begin reading
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${selectedBook.abbreviation}-${selectedChapterIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl mx-auto px-4 sm:px-8 py-8"
                >
                  {/* Chapter heading */}
                  <header className="mb-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className="text-xs uppercase tracking-widest text-primary/60 font-semibold mb-2">
                        {selectedBook.testament === Testament.Old
                          ? "Old Testament"
                          : "New Testament"}
                      </p>
                      <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-1">
                        {selectedBook.name}
                      </h2>
                      {currentChapter && (
                        <p className="font-display text-xl text-primary/80">
                          Chapter {currentChapter.number.toString()}
                        </p>
                      )}
                    </motion.div>
                    <div className="ornament mt-4 text-primary/30 text-lg" />
                  </header>

                  {/* Verses or loading state */}
                  {currentChapter ? (
                    <div className="space-y-1">
                      {currentChapter.verses.map((verse, vIdx) => {
                        const isActive = tts.currentVerseIndex === vIdx;
                        return (
                          <motion.div
                            key={verse.number.toString()}
                            ref={(el) => {
                              verseRefs.current[vIdx] = el;
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: Math.min(vIdx * 0.015, 0.5) }}
                            className={[
                              "px-3 py-2 rounded-sm transition-all duration-300 cursor-pointer group",
                              isActive
                                ? "verse-highlight animate-reading-pulse"
                                : "hover:bg-accent/15",
                            ].join(" ")}
                            data-ocid={`verse.item.${vIdx + 1}`}
                            onClick={() => {
                              tts.play(verseTexts, vIdx);
                            }}
                            title="Click to read from this verse"
                          >
                            <span
                              className={[
                                "inline-block w-8 text-right mr-3 text-sm shrink-0 font-semibold select-none align-top",
                                isActive
                                  ? "text-primary"
                                  : "text-primary/40 group-hover:text-primary/70",
                              ].join(" ")}
                            >
                              {verse.number.toString()}
                            </span>
                            <span
                              className={[
                                "font-body text-lg leading-relaxed",
                                isActive
                                  ? "text-foreground"
                                  : "text-foreground/85",
                              ].join(" ")}
                            >
                              {verse.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Book has no chapters yet (still loading) */
                    <div
                      className="flex flex-col items-center justify-center py-16 gap-4"
                      data-ocid="reader.loading_state"
                    >
                      <Loader2 className="h-8 w-8 animate-spin text-primary/50" />
                      <p className="text-sm text-muted-foreground">
                        Loading chapter…
                      </p>
                    </div>
                  )}

                  {/* Chapter navigation footer */}
                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-border/50">
                    <Button
                      variant="ghost"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                      onClick={handlePrevChapter}
                      data-ocid="reader.prev_chapter.button"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">
                        {selectedBook.name} {currentChapter?.number.toString()}
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                      onClick={handleNextChapter}
                      data-ocid="reader.next_chapter.button"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-2 text-center">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()}. Built with{" "}
          <span className="text-primary/60">♥</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/80 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

// Book navigation item component
interface BookNavItemProps {
  book: Book;
  index: number;
  isSelected: boolean;
  isExpanded: boolean;
  selectedChapterIndex: number;
  onBookClick: () => void;
  onChapterClick: (chapterIndex: number) => void;
}

function BookNavItem({
  book,
  index,
  isSelected,
  isExpanded,
  selectedChapterIndex,
  onBookClick,
  onChapterClick,
}: BookNavItemProps) {
  return (
    <div>
      <button
        type="button"
        className={[
          "w-full text-left px-4 py-1.5 flex items-center justify-between hover:bg-accent/25 transition-colors text-sm",
          isSelected ? "text-primary font-semibold" : "text-foreground/80",
        ].join(" ")}
        onClick={onBookClick}
        data-ocid={`nav.book.item.${index + 1}`}
      >
        <span className="truncate">{book.name}</span>
        <span className="text-xs text-muted-foreground ml-1 shrink-0">
          {isExpanded ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && book.chapters.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-2 pt-0.5 grid grid-cols-5 gap-1">
              {book.chapters.map((chapter, ci) => (
                <button
                  type="button"
                  key={chapter.number.toString()}
                  className={[
                    "h-7 w-full rounded text-xs font-medium transition-colors",
                    isSelected && ci === selectedChapterIndex
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent/40 text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  onClick={() => onChapterClick(ci)}
                  data-ocid={`nav.chapter.item.${ci + 1}`}
                >
                  {chapter.number.toString()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
        {isExpanded && book.chapters.length === 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-2 pt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin" />
              Loading…
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
