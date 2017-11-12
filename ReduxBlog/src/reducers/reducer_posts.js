import { FETCH_POSTS } from '../actions';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

//KEJSI ADDED COMMENT ON: Nov 12, 2017, 16:12
//KEJSI ADDED COMMENT ON: Nov 12, 2017, 16:05
export default function(state = {} , action) {
	switch(action.type) {
		case FETCH_POSTS:
			//fetching our initial list of posts
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}