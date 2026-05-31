import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  private authors: Author[];
  private books: AbstractBook[];
  private copies: Copy[];
  private readers: Reader[];

  constructor() {
    this.authors = [];
    this.books = [];
    this.copies = [];
    this.readers = [];
  }

  addAuthor(author: Author): void {
    if (!this.authors.includes(author)) {
      this.authors.push(author);
    }
  }

  addBook(book: AbstractBook): void {
    if (!this.books.includes(book)) {
      this.books.push(book);
    }
  }

  addCopy(copy: Copy): void {
    if (!this.copies.includes(copy)) {
      this.copies.push(copy);
    }
  }

  addReader(reader: Reader): void {
    if (!this.readers.includes(reader)) {
      this.readers.push(reader);
    }
  }

  getAuthors(): Author[] {
    return [...this.authors];
  }

  getBooks(): AbstractBook[] {
    return [...this.books];
  }

  getCopies(): Copy[] {
    return [...this.copies];
  }

  getReaders(): Reader[] {
    return [...this.readers];
  }

  getAvailableCopies(book?: AbstractBook): Copy[] {
    return this.copies.filter((copy) => {
      const matchesBook = book === undefined || copy.getBook() === book;
      return matchesBook && copy.isCopyAvailable();
    });
  }

  searchBooksByAuthor(author: Author): AbstractBook[] {
    return this.books.filter((book) => author.getBooks().includes(book));
  }
}
