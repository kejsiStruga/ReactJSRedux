import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

/*Lifecycle method -> part of component that will be called by react
componentDidMount
*/

class PostsIndex extends Component {
	//will be called immediatly after this component has been rendered
	//fetching data is asynch operation !
	//react will always eager; load wont wait; component will rendered one time
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderPosts(){
		return _.map(this.props.posts, post => {
			return (
					<li className="list-group-item" key={post.id}>
						{post.title}
					</li>
				);
		});
	}
	render() {
		console.log(this.props.posts);
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

//pass actioncreator as second param of connect + using ES6 syntax
export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);
