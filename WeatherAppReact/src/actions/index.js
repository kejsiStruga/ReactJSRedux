import axios from 'axios';

const API_KEY = '0b78e0147a14600aeb91f1e57ddc9b40';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//es6 template strings
//AJAX REQUEST WITH REDUX
//MW CAN MODIFY ACTIONS; FUNCTIONS WHERE ACTIONS GETS PASS THEM BEFORE GETTIIG TO REDUCERS
//WE USE npm PACKAGE redux-promise
//jQuery .ajax request with axios?

//application state holds all data (weather data)
//state is changed only through reducers and actions => must dispatch action, calling the action creator

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
	//queryString
	const url = `${ROOT_URL}&q=${cityName},us`;
	const request = axios.get(url);	
	//axios returns a promise
	//promise doesnt contain any of our data !
	//we are returning the promise as the PAYLOAD !
	
	console.log('Request: ',request);

	//ajax requests from browser => axos ~~ to jQuery
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}