//Getting what I need from the HTML file
const cards = document.querySelector('.book-section');
const addButton = document.querySelector('.submit');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const hasReadInput = document.querySelector('#read-status');

//Array to store the books
let myLibrary = [

];

//Constructor function
function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
}

//Adding books to the library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

}

function displayBook() {

}

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const book = new Book (authorInput.value, titleInput.value, pagesInput.value, hasReadInput.checked);
    addBookToLibrary(book);
    const newCard = document.createElement('div');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const pages = document.createElement('div');
    const hasRead = document.createElement('div');
    const deleteCard = document.createElement('button');

    hasRead.style.cursor = 'pointer';

    newCard.classList.add('book-card');
    author.textContent = book.author;
    title.textContent = book.title;
    pages.textContent = book.pages;

    if (hasReadInput.checked === true) {
        hasRead.textContent = 'Completed!'
    } else {
        hasRead.textContent = 'In Progress!'
    }

    hasRead.addEventListener('click', () => {
        if (hasRead.textContent === 'Completed!') {
            hasRead.textContent = 'In Progress!'
        } else {
            hasRead.textContent = 'Completed!'
        }
    });

    deleteCard.textContent = 'Delete card?';
    deleteCard.classList.add('delete-card');

    cards.appendChild(newCard);
    newCard.appendChild(author);
    newCard.appendChild(title);
    newCard.appendChild(pages);
    newCard.appendChild(hasRead);
    newCard.appendChild(deleteCard);

    deleteCard.addEventListener('click', () =>  {
        newCard.remove();
    });

    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    hasReadInput.checked = false;
})

//Testing adding an object to the library via the DOM because haven't used in a while
/* 
const testObject = new Book('J.R.R Tolkien', 'The Hobbit', 644, true);

const newCard = document.createElement('div');
const author = document.createElement('div');
const title = document.createElement('div');
const pages = document.createElement('div');
const hasRead = document.createElement('div');
const deleteCard = document.createElement('button');

newCard.classList.add('book-card');
author.textContent = `Author: ${testObject.author}`;
title.textContent = testObject.title;
pages.textContent = testObject.pages;
hasRead.textContent = `Read status: ${testObject.hasRead}`;
deleteCard.textContent = 'Delete card?';
deleteCard.classList.add('delete-card');

cards.appendChild(newCard);
newCard.appendChild(author);
newCard.appendChild(title);
newCard.appendChild(pages);
newCard.appendChild(hasRead);
newCard.appendChild(deleteCard);

deleteCard.addEventListener('click', () =>  {
    newCard.remove();
});

const testObject2 = new Book('JK Rowling', 'Harry Potter', 599, false);

const newCard2 = document.createElement('div');
const author2 = document.createElement('div');
const title2 = document.createElement('div');
const pages2 = document.createElement('div');
const hasRead2 = document.createElement('div');

newCard2.classList.add('book-card');
author2.textContent = `Author: ${testObject2.author}`;
title2.textContent = testObject2.title;
pages2.textContent = testObject2.pages;
hasRead2.textContent = `Read status: ${testObject2.hasRead}`;

cards.appendChild(newCard2);
newCard2.appendChild(author2);
newCard2.appendChild(title2);
newCard2.appendChild(pages2);
newCard2.appendChild(hasRead2); */