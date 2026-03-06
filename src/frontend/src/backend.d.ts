import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Verse {
    text: string;
    number: bigint;
}
export interface SearchResult {
    verse: bigint;
    book: string;
    text: string;
    chapter: bigint;
}
export interface Book {
    name: string;
    testament: Testament;
    chapters: Array<Chapter>;
    abbreviation: string;
}
export interface Chapter {
    verses: Array<Verse>;
    number: bigint;
}
export enum Testament {
    New = "New",
    Old = "Old"
}
export interface backendInterface {
    getAllBooks(): Promise<Array<Book>>;
    getBook(abbreviation: string): Promise<Book | null>;
    getBooksByTestament(): Promise<[Array<Book>, Array<Book>]>;
    getChapters(bookAbbreviation: string): Promise<Array<Chapter>>;
    getVerse(bookAbbreviation: string, chapterNumber: bigint, verseNumber: bigint): Promise<Verse>;
    getVerses(bookAbbreviation: string, chapterNumber: bigint): Promise<Array<Verse>>;
    searchVerses(keyword: string): Promise<Array<SearchResult>>;
    seedBibleData(kjvBooks: Array<Book>): Promise<void>;
}
