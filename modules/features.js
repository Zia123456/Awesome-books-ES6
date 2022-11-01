/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import Book class from books.js
import { Book } from '/modules/book.js';

// import variables from acess-html-elements.js
import {
  container,
  bookTitle,
  bookAuthor,
} from '/modules/access-html-elements.js';

// creating book object from class Book
class features {
  static addNewBook = () => {
    // js to create a new book object
    const newBookTitle = bookTitle.value;
    const newBookAuthor = bookAuthor.value;
    const book = new Book(newBookTitle, newBookAuthor);

    // to set up and update local storage
    if (localStorage.getItem('awesome-books') == null) {
      localStorage.setItem('awesome-books', '[]');
    }

    // geting old data and merging with new data
    const oldData = JSON.parse(localStorage.getItem('awesome-books'));
    oldData.push(book);

    // updating local storage data
    localStorage.setItem('awesome-books', JSON.stringify(oldData));
  };

  static removeBook = (index) => {
    const books = JSON.parse(localStorage.getItem('awesome-books'));
    books.splice(index, 1);
    // js to update local storage after removing a book
    localStorage.setItem('awesome-books', JSON.stringify(books));
  };

  static displayBooks = () => {
    container.innerHTML = '';
    const books = JSON.parse(localStorage.getItem('awesome-books'));
    for (let i = 0; i < books.length; i += 1) {
      const div = document.createElement('div');
      div.className = 'book-container';
      if (i % 2 !== 0) {
        div.className = 'white-color';
      } else {
        div.className = 'gray-color';
      }

      const textDiv = document.createElement('div');
      textDiv.className = 'text-container';

      const spanTitle = document.createElement('span');
      spanTitle.className = 'book-title';
      spanTitle.innerHTML = `"${books[i]?.title}"`;
      textDiv.appendChild(spanTitle);

      const by = document.createElement('span');
      by.innerHTML = ' by ';
      textDiv.appendChild(by);

      const spanAuthor = document.createElement('span');
      spanAuthor.className = 'author';
      spanAuthor.innerHTML = books[i]?.author;
      textDiv.appendChild(spanAuthor);

      const removeButton = document.createElement('button');
      removeButton.className = 'remove';
      removeButton.innerHTML = 'Remove';
      div.appendChild(removeButton);
      removeButton.onclick = () => {
        features.removeBook(i);
        features.displayBooks();
      };

      div.appendChild(textDiv);
      container.appendChild(div);
    }
  };
}

export { features };
