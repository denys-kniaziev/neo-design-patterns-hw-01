import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  private author: Author;

  constructor(title: string, year: number, author: Author) {
    super(title, year);
    this.author = author;
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

  getDescription(): string {
    return `Book: "${this.getTitle()}" (${this.getYear()}) by ${this.author.getName()}.`;
  }
}
