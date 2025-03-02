// premiumMember.js
import Member from "./member.js";

function PremiumMember(name) {
    Member.call(this, name);
    this.specialCollectionAccess = true;
}

// Inheriting from Member
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Overriding borrowBook method
PremiumMember.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }

    // Use call() to reuse Member's borrowBook method
    Member.prototype.borrowBook.call(this, book);
};

export default PremiumMember;
