import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import react always bcz it manages all components that have jsx!
//react components can show other components
//functional comp vs Class compoent (domain, maintain state, be more aware)


//spread the info of video user wants into all other components !
//where should we fetch that info of video ?? 
//but the videodetail uses this info as well
class SearchBar extends Component {

	//that's how we define states!
	constructor(props) {

		super(props);

		//this js obj in each class !! contains properties that we must observe (term-> searchterm the user will input)
		this.state = { term: '' };
		//this.setState !!! -> this we use everywhere else
	}

	//putting: value = { this.state.term } => <input> is now a controlled compoents

	//input tells the variable (state) what value should it take and that it should change 
	//every class based comp must have a render method
	render() {
		//onChange is a prop !
		return (
				<div className="search-bar">
					<input 
					  value = { this.state.term }
					  onChange = {event => this.onInputChange(event.target.value)} 
					/>
				</div>
			   ) ;
		//states gets updated ! => the value of input hasnt changed 
		//when finished rendering => value we see => thats how we treat data ! declerative; so the value of the input is equal to the state		
	}

	onInputChange(term)  {
		this.setState({term});	
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar; //=> all files that import SeachBar will be using this !

//downwards data flow := unidirectional 
	// *** WHENEVER THE COMPONENTS STATE CHANGES => THE COMPONENT RERENDERS
	// => IT FORCES THE CHILD COMPS

	//function, will have event; event handler is always called with an event object
	//the event object describes the context and information about the event that occured
	//since we have input el=> we'll use the event to get the value of the input 
	// onInputChange(event) 
	//{
	// 	console.log(event.target.value);	
	// }
