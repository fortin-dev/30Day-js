// Task 1 : create a Book object with propertie - title , author, and year

const Book = {
    title : 'Atomic Habits',
    author : 'James Clear',
    year : 2018
}

console.log(Book);
console.log(typeof Book);

//Task 2 : log the title and author propertie of book object

let bookTitle = Book.title;
let bookAuthor = Book.author;
console.log(`Title of book is ${bookTitle} and Author of the book is ${bookAuthor}`);

// Activity 2 : Task 3 : add a method to the book object that returns a string of books author and title

function returnString(book) {
    return (book.author + " " + book.title)
}

console.log(returnString(Book));

// Activity 2 : Task 4 : add a method to the book object that updates the year propertie

Book.updateYear = function(Updatedyear) {
    Book.year=Updatedyear;
}

console.log(".............",Book.updateYear(2016));

// Activity 4 : Task 7 : add a method to the book object that use this keyword to return a string

Book.pthisReturn = function(){
    return this.title +" "+ this.year
}
console.log(Book.pthisReturn());

// Activity 5 : Task 8 : use for...in to iterate over objects propertie
function pritn(Book){
for (const key in Book) {
    console.log(`${key} : ${Book[key]}`);
}
}
pritn(Book)

//Task 9 : use .keys and .values methods

console.log(Object.keys(Book));
console.log(Object.values(Book));