document.addEventListener("DOMContentLoaded", function() {
listOfBooks()

});

function listOfBooks() {
    // console.log("is this working???");
    fetch("http://localhost:3000/books")
        .then(response => response.json())
        // .then(bookArray => bookArray.forEach(book => renderBook(book)))
        .then(json => console.log(json))
}

function renderBook(book) {
    // let bookList = document.getElementById("")
    let eachBook = document.createElement("li")
    let ul = document.querySelector("#list")
    eachBook.innerText = book.title
    console.log(eachBook)
    ul.appendChild(eachBook)
    eachBook.addEventListener("click", () => {
        bookDetails(book)
        
        // let bookCard = document.createElement('div')
        // bookCard.classList += 'card'
        // let bookName = document.createElement('h1')
        // bookName.innerText = book.title
        // let bookDescription = document.createElement('p')
        // bookDescription.innerText = book.description
        // console.log(e.target.description);
    })

}

function bookDetails(book) {

    // console.log(book)
    let bookCard = document.createElement('div')
    bookCard.classList += 'card'
    let bookName = document.createElement('h1')
    bookName.innerText = book.title
    let bookDescription = document.createElement('p')
    bookDescription.innerText = book.description
    let bookImg = document.createElement('img')
    bookImg.src = book.img_url 
    // console.log(bookImg.src)
    let 



}