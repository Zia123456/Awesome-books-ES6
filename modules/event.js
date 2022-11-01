/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import variables from access-html-elements.js

import {
  form,
  bookTitle,
  bookAuthor,
  addBook,
  // eslint-disable-next-line import/no-absolute-path
} from '/modules/access-html-elements.js';

// import class features from features.js
import { features } from '/modules/features.js';

// js to add event to aadBook and prevent default
const addNewBook = form.addEventListener('click', (event) => {
  if (bookTitle.value == null || bookAuthor.value == null) {
    event.preventDefault();
  } else {
    addBook.addEventListener('click', features.addNewBook);
  }
});

// js to invoke displayBooks function
const displayAllBooks = window.addEventListener(
  'DOMContentLoaded',
  features.displayBooks,
);

export { addNewBook, displayAllBooks };
