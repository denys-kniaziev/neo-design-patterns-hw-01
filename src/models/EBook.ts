import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  private author: Author;
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year);
    this.author = author;
    this.url = url;
    this.author.addBook(this);
  }

  getAuthor(): Author {
    return this.author;
  }

  setAuthor(author: Author): void {
    if (this.author === author) {
      return;
    }

    this.author.removeBook(this);
    this.author = author;
    this.author.addBook(this);
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  getDescription(): string {
    return `E-book: "${this.getTitle()}" (${this.getYear()}) by ${this.author.getName()}. Available at ${this.url}.`;
  }
}
