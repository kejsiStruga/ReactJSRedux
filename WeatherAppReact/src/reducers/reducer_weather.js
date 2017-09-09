import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
	
	switch(action.type) {
		case FETCH_WEATHER: 
			//bcz we have multiple cities coming in !
			//we dont manipulate state directly  !
			//conact=> to return new instance of state
			return state.concat(action.payload.data); 
			//here we are not muttating !
			return [ action.payload.data, ...state ]; //[city ,city, city]
	}	
	return state;
}