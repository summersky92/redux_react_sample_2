import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({//all reducers will be combined here
  //one key: one reducer
  books: BooksReducer,// add a key to global application state: books
  activeBook: ActiveBook
});

export default rootReducer;
