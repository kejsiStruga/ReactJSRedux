import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const API_KEY = '?key=kejsi';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//redux promise to handle the asynch nature
//axios for making network requests
export function fetchPosts() {

	//generate new request
	//BACKTICKS FOR TEMPLATE STRINGS
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	//the action we are returning
	return {
		type: FETCH_POSTS,
		//since we are passing the request as payload => the redux promise middleware will automatically resolve it !
		payload: request
	};
}