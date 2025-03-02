// member.js
function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

Member.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }

    if (!book.isAvailable) {
        console.log(`Sorry, "${book.title}" is already borrowed.`);
        return;
    }

    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
};

export default Member;
