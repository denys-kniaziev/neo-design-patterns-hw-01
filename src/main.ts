import { AbstractBook } from "./models/AbstractBook";
import { Author } from "./models/Author";
import { Book } from "./models/Book";
import { BorrowService } from "./services/BorrowService";
import { Copy } from "./models/Copy";
import { EBook } from "./models/EBook";
import { Library } from "./models/Library";
import { Reader } from "./models/Reader";

// Create an author and books
const author = new Author("John Doe");
const book = new Book("The Great Book", 2020, author);
const ebook = new EBook(
  "Digital Book",
  2021,
  author,
  "https://example.com/ebook"
);

// Create copies
const copy1 = new Copy(book);
const copy2 = new Copy(book);

// Create a reader
const reader = new Reader("1", "Alice");

// Create a library and add entities
const library = new Library();
library.addAuthor(author);
library.addBook(book);
library.addBook(ebook);
library.addCopy(copy1);
library.addCopy(copy2);
library.addReader(reader);

// Create the borrowing service
const borrowService = new BorrowService();

// Borrowing demo
console.log("Attempting to borrow copy1...");
const borrowResult1 = borrowService.borrow(reader, copy1);
console.log(`Borrow result: ${borrowResult1}`);

console.log("Attempting to borrow copy1 again...");
const borrowResult2 = borrowService.borrow(reader, copy1);
console.log(`Borrow result: ${borrowResult2}`);

// Returning demo
console.log("Attempting to return copy1...");
borrowService.returnBook(reader, copy1);
console.log(`Copy1 is available: ${copy1.isCopyAvailable()}`);

// Polymorphism demo
console.log("\nBook descriptions:");
console.log(book.getDescription());
console.log(ebook.getDescription());

console.log("\nAvailable copies of The Great Book:");
console.log(library.getAvailableCopies(book).length);

console.log("\nBooks by John Doe:");
console.log(library.searchBooksByAuthor(author).map((item) => item.getTitle()));

// Creating AbstractBook directly is forbidden by TypeScript.
// const abstractBook = new AbstractBook("Test", 2022);
