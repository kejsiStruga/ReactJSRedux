import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //file
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
/*means that 'react' is a library installed in
node modules that this class needs and the 
'React' variable must have access to it 

react -> individual components (or views) are snippets of code which 
produces html; components are nested one into the other to make complex application
components will produce html out of JS 
first make components then -> show it in page 

const is an ES2016 syntax 
const is constant	
jsx allows us to write html that looks like js BUT IT js !!

import statement -> rendering component in dom 
js modules -> code in one class are seperate from code in other files 
!!!!!!!!!! unless we explicity state it ! (modularit design patterns)
*/

//this is a factory which creates instances of objs that gets 
//rendered into dom !! that is why we pass <App /> to 
//react dom !! (so we first instantiate !!)


//whenever we make variable that wont change => const
//otherwise let => api is const
//will allow us to make request to youtube
//npm pck that will allow us to make request
//given api key and a search term the pcg will return data
//that includes the search form

//--save in npm install means it will place it in package.json
/*
 each time user types in search => we must perform a call via the api
*/

const API_KEY = 'AIzaSyCoAlKfQWZUYH9nKx5wMvhsb24PpmKgnBU';

//state only in class based components !
//pass data from parent component to child component => we define a property to the jsx syntx

class App extends Component {

	constructor(props) {
		super(props);


		//++selected video
		this.state = {
			videos:  [] ,
			selectedVideo: null	
		};

		//each attr is a property that we add it here, and it is accessible via props !
		//we dont know how much time the search will take bcz it is a network request !
		//bcz we want the user to have some videos when app first boots up!
		this.videoSearch('pirsig');
	}
	videoSearch(term) {
			
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
		}
		//we want onSearchTermChange to be called one in each x seconds not very often !
		//debounced version to throttle
		render()  {
			//the function can be called only once every 300 ms
			const videoSearch = _.debounce((term) => { this.videoSearch(term) },300 );
			return (
				<div>
					<SearchBar onSearchTermChange= { videoSearch } />
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
						onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
						videos={this.state.videos} />
				</div>
			);
		}
}

//ReactDOM.render(reactElement, domContainerNode-> render target !!)
ReactDOM.render(     
  <App />,
  document.querySelector('.container')        
);

//different components for diff functions (purposes)
//whn key name == value name => '{ name_of_var } ' => {name_of_var : name_of_var}'
//react manager components whereas reactdom renders in dom
//can render multiple components at once!
//one component that shows a list of components

/*
export classes 
modulos and 
states 
*/