import { FETCH_POSTS } from '../actions';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

export default function(state = {} , action) {
	switch(action.type) {
		case FETCH_POSTS:
			//fetching our initial list of posts
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}