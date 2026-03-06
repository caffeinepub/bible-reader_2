// KJV Bible type definitions and placeholder book list.
// Full chapter/verse data is fetched at runtime by useBibleLoader.

export interface Verse {
  text: string;
  number: bigint;
}

export interface Chapter {
  verses: Array<Verse>;
  number: bigint;
}

export enum Testament {
  New = "New",
  Old = "Old",
}

export interface Book {
  name: string;
  testament: Testament;
  chapters: Array<Chapter>;
  abbreviation: string;
}

// ─── Helper constructors (kept for compatibility) ─────────────────────────────

export function v(num: number, text: string): Verse {
  return { number: BigInt(num), text };
}

export function c(num: number, verses: Verse[]): Chapter {
  return { number: BigInt(num), verses };
}

// ─── Placeholder book list ────────────────────────────────────────────────────
// Contains all 66 books with correct metadata but empty chapters.
// Used to populate the sidebar immediately while full data loads.

function placeholder(
  name: string,
  abbreviation: string,
  testament: Testament,
): Book {
  return { name, abbreviation, testament, chapters: [] };
}

export const kjvBible: Book[] = [
  // Old Testament
  placeholder("Genesis", "gen", Testament.Old),
  placeholder("Exodus", "exo", Testament.Old),
  placeholder("Leviticus", "lev", Testament.Old),
  placeholder("Numbers", "num", Testament.Old),
  placeholder("Deuteronomy", "deu", Testament.Old),
  placeholder("Joshua", "jos", Testament.Old),
  placeholder("Judges", "jdg", Testament.Old),
  placeholder("Ruth", "rth", Testament.Old),
  placeholder("1 Samuel", "1sa", Testament.Old),
  placeholder("2 Samuel", "2sa", Testament.Old),
  placeholder("1 Kings", "1ki", Testament.Old),
  placeholder("2 Kings", "2ki", Testament.Old),
  placeholder("1 Chronicles", "1ch", Testament.Old),
  placeholder("2 Chronicles", "2ch", Testament.Old),
  placeholder("Ezra", "ezr", Testament.Old),
  placeholder("Nehemiah", "neh", Testament.Old),
  placeholder("Esther", "est", Testament.Old),
  placeholder("Job", "job", Testament.Old),
  placeholder("Psalms", "psa", Testament.Old),
  placeholder("Proverbs", "pro", Testament.Old),
  placeholder("Ecclesiastes", "ecc", Testament.Old),
  placeholder("Song of Solomon", "sng", Testament.Old),
  placeholder("Isaiah", "isa", Testament.Old),
  placeholder("Jeremiah", "jer", Testament.Old),
  placeholder("Lamentations", "lam", Testament.Old),
  placeholder("Ezekiel", "ezk", Testament.Old),
  placeholder("Daniel", "dan", Testament.Old),
  placeholder("Hosea", "hos", Testament.Old),
  placeholder("Joel", "jol", Testament.Old),
  placeholder("Amos", "amo", Testament.Old),
  placeholder("Obadiah", "oba", Testament.Old),
  placeholder("Jonah", "jon", Testament.Old),
  placeholder("Micah", "mic", Testament.Old),
  placeholder("Nahum", "nah", Testament.Old),
  placeholder("Habakkuk", "hab", Testament.Old),
  placeholder("Zephaniah", "zep", Testament.Old),
  placeholder("Haggai", "hag", Testament.Old),
  placeholder("Zechariah", "zec", Testament.Old),
  placeholder("Malachi", "mal", Testament.Old),

  // New Testament
  placeholder("Matthew", "mat", Testament.New),
  placeholder("Mark", "mar", Testament.New),
  placeholder("Luke", "luk", Testament.New),
  placeholder("John", "joh", Testament.New),
  placeholder("Acts", "act", Testament.New),
  placeholder("Romans", "rom", Testament.New),
  placeholder("1 Corinthians", "1co", Testament.New),
  placeholder("2 Corinthians", "2co", Testament.New),
  placeholder("Galatians", "gal", Testament.New),
  placeholder("Ephesians", "eph", Testament.New),
  placeholder("Philippians", "phi", Testament.New),
  placeholder("Colossians", "col", Testament.New),
  placeholder("1 Thessalonians", "1th", Testament.New),
  placeholder("2 Thessalonians", "2th", Testament.New),
  placeholder("1 Timothy", "1ti", Testament.New),
  placeholder("2 Timothy", "2ti", Testament.New),
  placeholder("Titus", "tit", Testament.New),
  placeholder("Philemon", "phl", Testament.New),
  placeholder("Hebrews", "heb", Testament.New),
  placeholder("James", "jam", Testament.New),
  placeholder("1 Peter", "1pe", Testament.New),
  placeholder("2 Peter", "2pe", Testament.New),
  placeholder("1 John", "1jo", Testament.New),
  placeholder("2 John", "2jo", Testament.New),
  placeholder("3 John", "3jo", Testament.New),
  placeholder("Jude", "jud", Testament.New),
  placeholder("Revelation", "rev", Testament.New),
];
