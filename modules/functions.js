// import variables from access-html-elements.js
import {
  container,
  form,
  bookTitle,
  bookAuthor,
  addBook,
  bookContainer,
  contactContainer,
  list,
  addNew,
  contact,
  pageTitle,
} from '/modules/access-html-elements.js';

// functions for DOM Manipulation
const displayList = () => {
  bookContainer.classList.remove('hide');
  list.classList.remove('deactive');
  bookContainer.classList.add('books-container');
  form.classList.add('hide');
  addNew.classList.add('deactive');
  contactContainer.classList.add('hide');
  contact.classList.add('deactive');
  pageTitle.innerHTML = 'All awesome books';
};
list.addEventListener('click', displayList);

const displayAddNew = () => {
  bookContainer.classList.add('hide');
  list.classList.add('deactive');
  form.classList.remove('hide');
  addNew.classList.remove('deactive');
  contactContainer.classList.add('hide');
  contact.classList.add('deactive');
  pageTitle.innerHTML = 'Add a new book';
};

addNew.addEventListener('click', displayAddNew);

const displayContact = () => {
  bookContainer.classList.add('hide');
  list.classList.add('deactive');
  form.classList.add('hide');
  addNew.classList.add('deactive');
  contactContainer.classList.remove('hide');
  contact.classList.remove('deactive');
  pageTitle.innerHTML = 'Contact information';
};

contact.addEventListener('click', displayContact);

export { displayList, displayAddNew, displayContact };
