/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
// import functions for DOM manipulation from functions.js
import {
  displayList,
  displayAddNew,
  displayContact,
} from './modules/functions.js';

// import class features from features.js
import { features } from './modules/features.js';

// import events from event.js
import { addNewBook, displayAllBooks } from './modules/event.js';

// import DateTime object from luxon.js
import { DateTime } from './modules/luxon.js';

// js to display time
const dateTime = DateTime.now();
document.querySelector('.date-time').innerHTML = dateTime.toLocaleString(
  DateTime.DATETIME_MED,
);
