// useBibleLoader.ts
// Fetches all 66 KJV Bible books from public GitHub CDN concurrently.
// Caches in module-level variable so it only fetches once per session.

import { useEffect, useState } from "react";
import { type Book, type Chapter, Testament, type Verse } from "../bibleData";

// ─── Book manifest ────────────────────────────────────────────────────────────

interface BookMeta {
  filename: string;
  display: string;
  abbreviation: string;
  testament: Testament;
}

const OLD_TESTAMENT_BOOKS: BookMeta[] = [
  {
    filename: "Genesis",
    display: "Genesis",
    abbreviation: "gen",
    testament: Testament.Old,
  },
  {
    filename: "Exodus",
    display: "Exodus",
    abbreviation: "exo",
    testament: Testament.Old,
  },
  {
    filename: "Leviticus",
    display: "Leviticus",
    abbreviation: "lev",
    testament: Testament.Old,
  },
  {
    filename: "Numbers",
    display: "Numbers",
    abbreviation: "num",
    testament: Testament.Old,
  },
  {
    filename: "Deuteronomy",
    display: "Deuteronomy",
    abbreviation: "deu",
    testament: Testament.Old,
  },
  {
    filename: "Joshua",
    display: "Joshua",
    abbreviation: "jos",
    testament: Testament.Old,
  },
  {
    filename: "Judges",
    display: "Judges",
    abbreviation: "jdg",
    testament: Testament.Old,
  },
  {
    filename: "Ruth",
    display: "Ruth",
    abbreviation: "rth",
    testament: Testament.Old,
  },
  {
    filename: "1Samuel",
    display: "1 Samuel",
    abbreviation: "1sa",
    testament: Testament.Old,
  },
  {
    filename: "2Samuel",
    display: "2 Samuel",
    abbreviation: "2sa",
    testament: Testament.Old,
  },
  {
    filename: "1Kings",
    display: "1 Kings",
    abbreviation: "1ki",
    testament: Testament.Old,
  },
  {
    filename: "2Kings",
    display: "2 Kings",
    abbreviation: "2ki",
    testament: Testament.Old,
  },
  {
    filename: "1Chronicles",
    display: "1 Chronicles",
    abbreviation: "1ch",
    testament: Testament.Old,
  },
  {
    filename: "2Chronicles",
    display: "2 Chronicles",
    abbreviation: "2ch",
    testament: Testament.Old,
  },
  {
    filename: "Ezra",
    display: "Ezra",
    abbreviation: "ezr",
    testament: Testament.Old,
  },
  {
    filename: "Nehemiah",
    display: "Nehemiah",
    abbreviation: "neh",
    testament: Testament.Old,
  },
  {
    filename: "Esther",
    display: "Esther",
    abbreviation: "est",
    testament: Testament.Old,
  },
  {
    filename: "Job",
    display: "Job",
    abbreviation: "job",
    testament: Testament.Old,
  },
  {
    filename: "Psalms",
    display: "Psalms",
    abbreviation: "psa",
    testament: Testament.Old,
  },
  {
    filename: "Proverbs",
    display: "Proverbs",
    abbreviation: "pro",
    testament: Testament.Old,
  },
  {
    filename: "Ecclesiastes",
    display: "Ecclesiastes",
    abbreviation: "ecc",
    testament: Testament.Old,
  },
  {
    filename: "SongofSolomon",
    display: "Song of Solomon",
    abbreviation: "sng",
    testament: Testament.Old,
  },
  {
    filename: "Isaiah",
    display: "Isaiah",
    abbreviation: "isa",
    testament: Testament.Old,
  },
  {
    filename: "Jeremiah",
    display: "Jeremiah",
    abbreviation: "jer",
    testament: Testament.Old,
  },
  {
    filename: "Lamentations",
    display: "Lamentations",
    abbreviation: "lam",
    testament: Testament.Old,
  },
  {
    filename: "Ezekiel",
    display: "Ezekiel",
    abbreviation: "ezk",
    testament: Testament.Old,
  },
  {
    filename: "Daniel",
    display: "Daniel",
    abbreviation: "dan",
    testament: Testament.Old,
  },
  {
    filename: "Hosea",
    display: "Hosea",
    abbreviation: "hos",
    testament: Testament.Old,
  },
  {
    filename: "Joel",
    display: "Joel",
    abbreviation: "jol",
    testament: Testament.Old,
  },
  {
    filename: "Amos",
    display: "Amos",
    abbreviation: "amo",
    testament: Testament.Old,
  },
  {
    filename: "Obadiah",
    display: "Obadiah",
    abbreviation: "oba",
    testament: Testament.Old,
  },
  {
    filename: "Jonah",
    display: "Jonah",
    abbreviation: "jon",
    testament: Testament.Old,
  },
  {
    filename: "Micah",
    display: "Micah",
    abbreviation: "mic",
    testament: Testament.Old,
  },
  {
    filename: "Nahum",
    display: "Nahum",
    abbreviation: "nah",
    testament: Testament.Old,
  },
  {
    filename: "Habakkuk",
    display: "Habakkuk",
    abbreviation: "hab",
    testament: Testament.Old,
  },
  {
    filename: "Zephaniah",
    display: "Zephaniah",
    abbreviation: "zep",
    testament: Testament.Old,
  },
  {
    filename: "Haggai",
    display: "Haggai",
    abbreviation: "hag",
    testament: Testament.Old,
  },
  {
    filename: "Zechariah",
    display: "Zechariah",
    abbreviation: "zec",
    testament: Testament.Old,
  },
  {
    filename: "Malachi",
    display: "Malachi",
    abbreviation: "mal",
    testament: Testament.Old,
  },
];

const NEW_TESTAMENT_BOOKS: BookMeta[] = [
  {
    filename: "Matthew",
    display: "Matthew",
    abbreviation: "mat",
    testament: Testament.New,
  },
  {
    filename: "Mark",
    display: "Mark",
    abbreviation: "mar",
    testament: Testament.New,
  },
  {
    filename: "Luke",
    display: "Luke",
    abbreviation: "luk",
    testament: Testament.New,
  },
  {
    filename: "John",
    display: "John",
    abbreviation: "joh",
    testament: Testament.New,
  },
  {
    filename: "Acts",
    display: "Acts",
    abbreviation: "act",
    testament: Testament.New,
  },
  {
    filename: "Romans",
    display: "Romans",
    abbreviation: "rom",
    testament: Testament.New,
  },
  {
    filename: "1Corinthians",
    display: "1 Corinthians",
    abbreviation: "1co",
    testament: Testament.New,
  },
  {
    filename: "2Corinthians",
    display: "2 Corinthians",
    abbreviation: "2co",
    testament: Testament.New,
  },
  {
    filename: "Galatians",
    display: "Galatians",
    abbreviation: "gal",
    testament: Testament.New,
  },
  {
    filename: "Ephesians",
    display: "Ephesians",
    abbreviation: "eph",
    testament: Testament.New,
  },
  {
    filename: "Philippians",
    display: "Philippians",
    abbreviation: "phi",
    testament: Testament.New,
  },
  {
    filename: "Colossians",
    display: "Colossians",
    abbreviation: "col",
    testament: Testament.New,
  },
  {
    filename: "1Thessalonians",
    display: "1 Thessalonians",
    abbreviation: "1th",
    testament: Testament.New,
  },
  {
    filename: "2Thessalonians",
    display: "2 Thessalonians",
    abbreviation: "2th",
    testament: Testament.New,
  },
  {
    filename: "1Timothy",
    display: "1 Timothy",
    abbreviation: "1ti",
    testament: Testament.New,
  },
  {
    filename: "2Timothy",
    display: "2 Timothy",
    abbreviation: "2ti",
    testament: Testament.New,
  },
  {
    filename: "Titus",
    display: "Titus",
    abbreviation: "tit",
    testament: Testament.New,
  },
  {
    filename: "Philemon",
    display: "Philemon",
    abbreviation: "phl",
    testament: Testament.New,
  },
  {
    filename: "Hebrews",
    display: "Hebrews",
    abbreviation: "heb",
    testament: Testament.New,
  },
  {
    filename: "James",
    display: "James",
    abbreviation: "jam",
    testament: Testament.New,
  },
  {
    filename: "1Peter",
    display: "1 Peter",
    abbreviation: "1pe",
    testament: Testament.New,
  },
  {
    filename: "2Peter",
    display: "2 Peter",
    abbreviation: "2pe",
    testament: Testament.New,
  },
  {
    filename: "1John",
    display: "1 John",
    abbreviation: "1jo",
    testament: Testament.New,
  },
  {
    filename: "2John",
    display: "2 John",
    abbreviation: "2jo",
    testament: Testament.New,
  },
  {
    filename: "3John",
    display: "3 John",
    abbreviation: "3jo",
    testament: Testament.New,
  },
  {
    filename: "Jude",
    display: "Jude",
    abbreviation: "jud",
    testament: Testament.New,
  },
  {
    filename: "Revelation",
    display: "Revelation",
    abbreviation: "rev",
    testament: Testament.New,
  },
];

export const ALL_BOOK_METAS: BookMeta[] = [
  ...OLD_TESTAMENT_BOOKS,
  ...NEW_TESTAMENT_BOOKS,
];

// ─── Types matching the GitHub CDN JSON format ───────────────────────────────

interface RawVerse {
  verse: string;
  text: string;
}

interface RawChapter {
  chapter: string;
  verses: RawVerse[];
}

interface RawBook {
  book: string;
  chapters: RawChapter[];
}

// ─── Module-level cache ───────────────────────────────────────────────────────

let cachedBooks: Book[] | null = null;
let fetchPromise: Promise<Book[]> | null = null;

const BASE_URL = "https://raw.githubusercontent.com/aruljohn/Bible-kjv/master";

function transformBook(raw: RawBook, meta: BookMeta): Book {
  const chapters: Chapter[] = raw.chapters.map((rc) => {
    const verses: Verse[] = rc.verses.map((rv) => ({
      number: BigInt(rv.verse),
      text: rv.text,
    }));
    return {
      number: BigInt(rc.chapter),
      verses,
    };
  });

  return {
    name: meta.display,
    abbreviation: meta.abbreviation,
    testament: meta.testament,
    chapters,
  };
}

async function fetchAllBooks(): Promise<Book[]> {
  const results = await Promise.all(
    ALL_BOOK_METAS.map(async (meta) => {
      const res = await fetch(`${BASE_URL}/${meta.filename}.json`);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch ${meta.filename}: ${res.status} ${res.statusText}`,
        );
      }
      const raw: RawBook = await res.json();
      return transformBook(raw, meta);
    }),
  );
  return results;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

interface UseBibleLoaderResult {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}

export function useBibleLoader(): UseBibleLoaderResult {
  const [books, setBooks] = useState<Book[]>(cachedBooks ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(cachedBooks === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Already have cached data — nothing to do
    if (cachedBooks !== null) {
      setBooks(cachedBooks);
      setIsLoading(false);
      return;
    }

    // Kick off (or reuse) the global fetch promise
    if (!fetchPromise) {
      fetchPromise = fetchAllBooks();
    }

    let cancelled = false;

    fetchPromise
      .then((loaded) => {
        if (cancelled) return;
        cachedBooks = loaded;
        setBooks(loaded);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        fetchPromise = null; // allow retry on next mount
        setError(
          err instanceof Error ? err.message : "Failed to load scriptures.",
        );
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { books, isLoading, error };
}

/** Retry: clears the module-level promise so the next useBibleLoader call re-fetches */
export function retryBibleLoad() {
  fetchPromise = null;
  cachedBooks = null;
}
