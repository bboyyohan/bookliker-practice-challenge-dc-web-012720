document.addEventListener("DOMContentLoaded", function() {
listOfBooks()

});

function listOfBooks() {
    // console.log("is this working???");
    fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(bookArray => bookArray.forEach(book => renderBook(book)))
        // .then(json => console.log(json))
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

    console.log(book)
    let bookCard = document.createElement('div')
    bookCard.classList += 'card'
    let bookName = document.createElement('h1')
    bookName.innerText = book.title
    let bookDescription = document.createElement('p')
    bookDescription.innerText = book.description
    let bookImg = document.createElement('img')
    bookImg.src = book.img_url
    let likeBtn = document.createElement('button');
    likeBtn.innerText = "like"
    likeBtn.dataset.id = book.id; // dataset is optional you can also use likeBtn.id instead
    likeBtn.addEventListener('click', (e) => {

        likeThisBook(e, book)
        e.preventDefault() //it works but keeps refreshing
    });
    bookCard.append(bookName, bookImg, bookDescription, likeBtn);
    // let container = document.querySelector('#show-panel');
    // container.classList += 'container'
    bookContainer().innerHTML = ""
    bookContainer().append(bookCard);
    let usersUl = document.createElement('ul');
    usersUl.classList.add("ul")
    book.users.forEach(bookUser => addUser(bookUser, usersUl));
    bookCard.append(usersUl);
}

function likeThisBook(e, book) {
    let ul = document.querySelector('.ul');
    let allUsers = book.users
    let userObject = {
        id: 1,
        username: "pouros"
    }
    allUsers.push(userObject);
    fetch(`http://localhost:3000/books/${e.target.dataset.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({users: allUsers})
    }).then(res => res.json())
    .then(json => addUser(userObject, ul))
    
        
}

function addUser(bookUser, usersUl) {
    let usersLi = document.createElement('li');
    let userName = bookUser.username;
    usersLi.innerText = userName;
    usersUl.append(usersLi);
}


function bookContainer() {
    return document.querySelector("#show-panel");
}