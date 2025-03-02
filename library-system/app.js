// app.js
import Book from "./book.js";
import Member from "./member.js";
import PremiumMember from "./premiumMember.js";

// Creating books
const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Pride and Prejudice", "Jane Austen");
const book5 = new Book("Moby Dick", "Herman Melville");
const book6 = new Book("War and Peace", "Leo Tolstoy");

// Creating members
const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

// Borrow books
regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); // Should fail (limit reached)

premiumMember.borrowBook(book4);
premiumMember.borrowBook(book5);
premiumMember.borrowBook(book6);
premiumMember.borrowBook(book1); // Should fail (already borrowed by Alice)
premiumMember.borrowBook(book2);
premiumMember.borrowBook(book3); // Should fail (limit reached)

// Bind function for borrowing
const boundBorrow = regularMember.borrowBook.bind(regularMember, book5);
boundBorrow(); // Should work within the limit

console.log("Regular Member's Borrowed Books:", regularMember.borrowedBooks);
console.log("Premium Member's Borrowed Books:", premiumMember.borrowedBooks);
