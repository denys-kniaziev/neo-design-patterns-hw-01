export abstract class AbstractBook {
  private title: string;
  private year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number): void {
    this.year = year;
  }

  abstract getDescription(): string;
}
