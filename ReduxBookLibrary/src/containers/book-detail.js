import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import Link from 'link-react';

class BookDetail extends Component {

 handleClick () {
    console.log('The link was clicked.');
  }
	render() {

		//return early ! from this render function
		if (!this.props.book) {
			return <div>Select a book to get started</div>	
		}

		return (
			<div>
				<h3>Detail for: </h3>
				 <div><a href={ decodeURIComponent(this.props.book.url) }>{ this.props.book.title }</a></div>	
				 
			</div>
		);
	}
}

//application state is not defined when app first boots up
//=> this.props.book.title will throw err
function mapStateToProps(state) {
	return {
		//bcz we have this in details reducer
		book: state.activeBook
	};
}
export default connect(mapStateToProps)(BookDetail);