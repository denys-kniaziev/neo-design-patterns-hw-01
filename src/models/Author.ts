import { AbstractBook } from "./AbstractBook";

export class Author {
  private name: string;
  private books: AbstractBook[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getBooks(): AbstractBook[] {
    return [...this.books];
  }

  addBook(book: AbstractBook): void {
    if (!this.books.includes(book)) {
      this.books.push(book);
    }
  }

  removeBook(book: AbstractBook): void {
    this.books = this.books.filter((item) => item !== book);
  }
}
