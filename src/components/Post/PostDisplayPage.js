import React from 'react';

import PostDisplay from './PostDisplay.js';
import PostEdit from './PostEdit.js';
import PostDisplayComments from './PostDisplayComments.js';


import RequireLogin from '../RequireLogin.js';

import './postDisplayPage.css';

export class PostDisplayPage extends React.Component{
	constructor(props){
		super(props);
		
		this.toggleEdit = this.toggleEdit.bind(this);
		this.deleteSelectedPost = this.deleteSelectedPost.bind(this);
		this.toggleLike = this.toggleLike.bind(this);
	}

	
	toggleEdit(){
		
	}

	toggleLike(toggle){
		
	}

	deleteSelectedPost(){
		
	}

	render(){
		
		

		

		return (
			<div className="postDisplayPage">
				<PostDisplay 
					toggleEdit={this.toggleEdit} 
					deleteSelectedPoem={this.deleteSelectedPoem}
					toggleLike={this.toggleLike}
				/>
				<PostDisplayComments />
			</div>
		);
	}
}



export default RequireLogin()((PostDisplayPage));