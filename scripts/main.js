const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (this.title + this.author + this.pages + this.read);
    };
}

function addBookToLibrary() {
    
}

const theHobbit = new Book('The Hobbit', ' by J.R.R Tolkien,', ' 295 pages,', ' not read yet');
console.log(theHobbit.info());