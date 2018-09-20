import React from 'react';



import './createReply.css';

export class CreateReply extends React.Component{
	constructor(props){
		super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
	    
	}

	handleSubmit(event) {
    event.preventDefault();

  }

	render(){
		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} className="createReply">
				<label>{Comment}</label>
				<textarea className="comment-box" type="text"   onChange={this.handleChange} />
				<button className="common-button" type="submit">Reply</button>
			</form>
		);
	}
}



export default CreateReply;