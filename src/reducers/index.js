import { combineReducers } from 'redux';
import BooksReducr from './reducer_book';

const rootReducer = combineReducers({
  books: BooksReducr
});

export default rootReducer;
