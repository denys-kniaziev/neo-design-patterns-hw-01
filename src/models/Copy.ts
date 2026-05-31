import { AbstractBook } from "./AbstractBook";

export class Copy {
  private book: AbstractBook;
  private isAvailable: boolean;

  constructor(book: AbstractBook) {
    this.book = book;
    this.isAvailable = true;
  }

  getBook(): AbstractBook {
    return this.book;
  }

  setBook(book: AbstractBook): void {
    this.book = book;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  setAvailability(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }
}
