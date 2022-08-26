const display = document.getElementById('display');
const modal = document.getElementById('modalForm');
const btn = document.getElementById('addBook')
const span = document.getElementsByClassName('close')[0];
const formBtn = document.getElementById('confirmForm');
const grid = document.getElementById('bookGrid');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

formBtn.onclick = function() {
    let bookContainer = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
    }
    let newCard = document.createElement('div')
    newCard.classList.add('book-card')
    grid.appendChild(newCard)
    let bookTitle = document.createElement('p')
    bookTitle.textContent = bookContainer.title
    newCard.appendChild(bookTitle)
    let bookAuthor = document.createElement('p')
    bookAuthor.textContent = bookContainer.author
    newCard.appendChild(bookAuthor)
    let bookPages = document.createElement('p')
    bookPages.textContent = bookContainer.pages
    newCard.appendChild(bookPages)




    bookLibrary.push(bookContainer)
}

let bookLibrary = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 123}, 
    {title: 'Metamorphosis', author: 'Kafka', pages: 223} 
]

