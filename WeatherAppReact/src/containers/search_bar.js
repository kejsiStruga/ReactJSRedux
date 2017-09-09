import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect method
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' };

		//diff approach from arrow func; bind the context of onInputChange
		this.onInputChange = this.onInputChange.bind(this); 
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//onInputChange is passed as a callback @onChange event
		//and callback has reference to 'this'=> you need to bind the context
		this.setState({ searchTerm: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	}

	//diff approach from arrow func; bind the context of onInputChange
	//this.onInputChange = this.onInputChange.bind(this); 

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input placeholder="Get a five-day forecast in your favourite cities"
						className="form-control"
						value={this.state.searchTerm}
						onChange={this.onInputChange}	
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>	
				</span>	
			</form>
		);
	}
}
//set state whenever the input changes! => first we init it in constructor
//change handler to handle change on input

function mapDispatchToProps(dispatch) {
	//bind action creators; action will flow down to middleware and then t o reducers
	return bindActionCreators({ fetchWeather }, dispatch)
}
//container wont care about states => we only have to pass second param on connect 
//hence null value
export default connect(null, mapDispatchToProps)(SearchBar)

