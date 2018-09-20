import React from 'react';

import {Link} from 'react-router-dom';

import './postDisplay.css';

export function PostDisplay(props){
	
	
	

	
	

	return (
		<div className="postDisplay">
			<h2>Sample Title</h2>
			<p className="author">
				By nidhin 
				</p>
			<div className="content-wrapper">sample</div>
			<div className="toolBar-wrapper">
				<p>Likes: 0</p>
				
			</div>
		</div>
	);
}



export default PostDisplay;