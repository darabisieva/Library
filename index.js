const myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById("library-view");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Автор: ${book.author}</p>
      <p>Страниц: ${book.pages}</p>
      <p>Статус: ${book.isRead ? "Прочитано" : "Не прочитано"}</p>
      <button onclick="toggleRead(${index})">Изменить статус</button>
      <button onclick="removeBook(${index})">Удалить</button>
    `;
    libraryContainer.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleRead(index) {
  myLibrary[index].toggleReadStatus();
  displayBooks();
}

// Форма для добавления книги
const form = document.getElementById("form-view");
form.innerHTML = `
  <form id="bookForm">
    <input type="text" id="title" placeholder="Название" required>
    <input type="text" id="author" placeholder="Автор" required>
    <input type="number" id="pages" placeholder="Страниц" required>
    <label><input type="checkbox" id="isRead"> Прочитано</label>
    <button type="submit">Добавить</button>
  </form>
`;

document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  addBookToLibrary(title, author, pages, isRead);
  event.target.reset();
});
