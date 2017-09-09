import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//mapping of states
const rootReducer = combineReducers({
	//books is the state and the value is whaterver gets returned by the funx BooksReducer
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;

//dynamic piece of state that changes over time => we'll use actions !!
