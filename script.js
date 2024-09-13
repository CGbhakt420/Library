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
  myLibrary.push(newBook); // Optionally, you can add the book to the library array
  render();
}

function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML=`
            <div class = "class-header">
                <h3 class = "title">${book.title}</h3>
                <h5 class = "author">${book.author}</h5>
            </div>
            <div class = "card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not read yet"}</p>
                <button class = "remove-button" onclick = "removeBook(${i})">Remove</button>
            </div>
            `;  
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
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
