import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//curly braces to get only one property 
class BookList extends Component {
//components to be promoted to container bcz it will have a direct connection to the state
//we take the react compoenent and inject data into it; through using the container "smart components" = component + redux  
	renderList() {
		//foreach using map function
		//application state has a books properties 

		//we call the action creator via the event handler onClick
		return this.props.books.map((book) => {
			return <li 
			 key={book.title} 
			 className="list-group-item"
			 onClick={ () => this.props.selectBook(book) }>
			 	{book.title}
			 </li>
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-5" >
				{ this.renderList() }
			</ul>
		)
	}
}
//container is component that has direct access to redux state
//how ? import react-redux lib
function mapStateToProps(state) {
	//take application state which contains the list of books and active books
	// what ever gets returned will be shown as props in App
	return {
		books: state.books
	};
}
/*
To change something in the state, 
you need to dispatch an action. 
An action is a plain JavaScript object 
*/
/*
anything returned from this function will end up as props
on the BookList component
*/
function mapDispatchToProps(dispatch) {
	//whenever selectBook is called
	//result should be passed to all the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
	//action create with the bindActionCreator
	//selectBook is a function
	//after getting the action we should let reducers know of this !
	//therefor we use dispatch
}

//bcz we want to export the container
//connect takes a function and a component
//promote bookList from component to container
//it need to know about this new dispatch method, selectBook
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
