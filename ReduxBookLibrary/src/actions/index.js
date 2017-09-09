import React, { Component } from 'react';
//RESPONSIBILITY
/*action creator should
	1. RETURN AN ACTION
	2. SEND ACTION TO ALL REDUCERS !
	-> since we have defined BookList as a container => action will be sent to all reducers
	
	action creaters
	book is an object with a title
	onClick handler
	action that gets return from it should end up 
	running through all our reducers; wired up to redux
	
	THE ACTION IS AN OBJECT WITH A 'TYPE' PROP + A PAYLOAD
	TYPE DESCRIBES THE PURPOSE OF THE ACTION 'USERSEELCTBOOK'

	*/

const selectBook = (book) => {
	console.log('A book has been selected', book.title);

	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
	//if we do not specify the return statement => 
	// we get error: Actions must be plain objects. 
	// Use custom middleware for async actions.
}
export { selectBook };
