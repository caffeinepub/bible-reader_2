import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

actor {
  type Testament = {
    #Old;
    #New;
  };

  type Book = {
    name : Text;
    abbreviation : Text;
    testament : Testament;
    chapters : [Chapter];
  };

  module Book {
    public func compare(book1 : Book, book2 : Book) : Order.Order {
      Text.compare(book1.name, book2.name);
    };
  };

  type Chapter = {
    number : Nat;
    verses : [Verse];
  };

  module Chapter {
    public func compare(chapter1 : Chapter, chapter2 : Chapter) : Order.Order {
      Nat.compare(chapter1.number, chapter2.number);
    };
  };

  type Verse = {
    number : Nat;
    text : Text;
  };

  module Verse {
    public func compare(verse1 : Verse, verse2 : Verse) : Order.Order {
      Nat.compare(verse1.number, verse2.number);
    };
  };

  type SearchResult = {
    book : Text;
    chapter : Nat;
    verse : Nat;
    text : Text;
  };

  module SearchResult {
    public func compare(result1 : SearchResult, result2 : SearchResult) : Order.Order {
      switch (Text.compare(result1.book, result2.book)) {
        case (#equal) {
          switch (Nat.compare(result1.chapter, result2.chapter)) {
            case (#equal) { Nat.compare(result1.verse, result2.verse) };
            case (order) { order };
          };
        };
        case (order) { order };
      };
    };
  };

  let booksMap = Map.empty<Text, Book>();

  public shared ({ caller }) func seedBibleData(kjvBooks : [Book]) {
    if (booksMap.size() > 0) {
      Runtime.trap("Bible data is already seeded.");
    };
    for (book in kjvBooks.values()) {
      booksMap.add(book.abbreviation, book);
    };
  };

  public query ({ caller }) func getBooksByTestament() : async ([Book], [Book]) {
    var oldCount = 0;
    var newCount = 0;

    for (book in booksMap.values()) {
      switch (book.testament) {
        case (#Old) { oldCount += 1 };
        case (#New) { newCount += 1 };
      };
    };

    let oldBooks = Array.repeat(
      { name = ""; abbreviation = ""; testament = #Old; chapters = [] },
      oldCount,
    );

    let newBooks = Array.repeat(
      { name = ""; abbreviation = ""; testament = #New; chapters = [] },
      newCount,
    );

    var oldIndex = 0;
    var newIndex = 0;

    for (book in booksMap.values()) {
      switch (book.testament) {
        case (#Old) {
          if (oldIndex < oldBooks.size()) {
            oldIndex += 1;
          };
        };
        case (#New) {
          if (newIndex < newBooks.size()) {
            newIndex += 1;
          };
        };
      };
    };

    let sortedOldBooks = oldBooks.sort();
    let sortedNewBooks = newBooks.sort();

    (sortedOldBooks, sortedNewBooks);
  };

  public query ({ caller }) func getChapters(bookAbbreviation : Text) : async [Chapter] {
    switch (booksMap.get(bookAbbreviation)) {
      case (?book) { book.chapters.sort() };
      case (null) { Runtime.trap("Book not found") };
    };
  };

  public query ({ caller }) func getVerses(bookAbbreviation : Text, chapterNumber : Nat) : async [Verse] {
    switch (booksMap.get(bookAbbreviation)) {
      case (?book) {
        for (chapter in book.chapters.values()) {
          if (chapter.number == chapterNumber) {
            return chapter.verses.sort();
          };
        };
        Runtime.trap("Chapter not found");
      };
      case (null) { Runtime.trap("Book not found") };
    };
  };

  public query ({ caller }) func searchVerses(keyword : Text) : async [SearchResult] {
    var results = Array.empty<SearchResult>();

    for (book in booksMap.values()) {
      for (chapter in book.chapters.values()) {
        for (verse in chapter.verses.values()) {
          if (verse.text.contains(#text keyword)) {
            let result : SearchResult = {
              book = book.name;
              chapter = chapter.number;
              verse = verse.number;
              text = verse.text;
            };
            results := results.concat([result]);
          };
        };
      };
    };

    results.sort();
  };

  public query ({ caller }) func getVerse(bookAbbreviation : Text, chapterNumber : Nat, verseNumber : Nat) : async Verse {
    switch (booksMap.get(bookAbbreviation)) {
      case (?book) {
        for (chapter in book.chapters.values()) {
          if (chapter.number == chapterNumber) {
            for (verse in chapter.verses.values()) {
              if (verse.number == verseNumber) {
                return verse;
              };
            };
            Runtime.trap("Verse not found");
          };
        };
        Runtime.trap("Chapter not found");
      };
      case (null) { Runtime.trap("Book not found") };
    };
  };

  public query ({ caller }) func getAllBooks() : async [Book] {
    booksMap.values().toArray();
  };

  public query ({ caller }) func getBook(abbreviation : Text) : async ?Book {
    booksMap.get(abbreviation);
  };
};
