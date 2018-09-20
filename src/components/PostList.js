import React from 'react';
import PostBlock from './inputs/PostBlock.js';
import {connect} from 'react-redux';


import './postList.css';

export class PostList extends React.Component {
	constructor(props){
		super(props);
		
		this.getPostList = this.getPostList.bind(this);
		this.selectPost = this.selectPost.bind(this);
	}

	componentDidMount(){
		
	}

	// calls to the API to get a list of poems for the component.
	getPoemList(query){
		
	}

	selectPoem(id){
		
	}

	render(){
		}
	);

		
		return (
			<div className="postList">
				
			</div>
		);
	}
}



export default PostList;