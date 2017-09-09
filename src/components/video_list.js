//no need for states, read-only => functional
import React from 'react';
import VideoListItem from './video_list_item';

//build in operstors -> map -> 
//[2,3,4].map(function(a){return a*2;})
//always add key prop to list !!
const VideoList = (props) => {

	//arrow function 
	const videoItems = props.videos.map((video) => {
		//{ video } will be accessedfrom props of VideoListItem!
	 	return (
	 	 <VideoListItem
	 		onVideoSelect={props.onVideoSelect}  
	 		key={video.etag} 
	 		video= { video }/>
	 	);
	 });
	//rendering arrays of items ! ex: array of components !
	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	);
};

export default VideoList;
