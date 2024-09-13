const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook); // This will log the new book object
  myLibrary.push(newBook); // Optionally, you can add the book to the library array
}

let newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-entry");
  newBookForm.style.display = "flex";
});

// Attach the event listener to the form, not the button
let newBookForm = document.querySelector("#new-book-entry");
newBookForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Correctly call the preventDefault method
  addBookToLibrary();
});
