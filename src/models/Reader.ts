import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private name: string;
  private borrowedCopies: Copy[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.borrowedCopies = [];
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getBorrowedCopies(): Copy[] {
    return [...this.borrowedCopies];
  }

  borrowCopy(copy: Copy): void {
    if (!this.borrowedCopies.includes(copy)) {
      this.borrowedCopies.push(copy);
    }
  }

  returnCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter((item) => item !== copy);
  }

  hasBorrowedCopy(copy: Copy): boolean {
    return this.borrowedCopies.includes(copy);
  }
}
