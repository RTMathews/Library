const myLibrary = [];

function Book() {
}

function addBookToLibrary() {
    
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    console.log(newBookForm);
    newBookForm.style.display = "block";
})