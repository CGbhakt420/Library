const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    
  // do stuff here
}

let newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", function(){
    let newBookform = document.querySelector("#new-book-entry");
    newBookform.style.display = "flex";
})