import React from 'react';



import RequireLogin from './RequireLogin.js';
import SearchForm from './forms/SearchForm.js';

import './search.css';

export class Search extends React.Component {
	constructor(props){
		super(props);
		
		this.getPostList = this.getPostList.bind(this);
		this.selectPost = this.selectPost.bind(this);
		this.resetPage = this.resetPage.bind(this);
	}

	resetPage(){
		
	}

	getPostList(keyword){
		
	}

	selectPost(id){
		
	}

	render(){
		
		


		return (
			<div className="search">
				<SearchForm getPoemList={this.getPoemList} resetPage={this.resetPage} />
				
			</div>
		);
	}
}



export default RequireLogin()(Search);