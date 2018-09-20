import React from 'react';



import './commentCreate.css';

export class CommentCreate extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	// onSubmit(values){
	// 	const {content} = values;
	// 	return this.props
	// 		.dispatch(createComment(this.props.poem_id, content))
	// 		.then(() => this.props.update());
	// }

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

	handleSubmit(event) {
    event.preventDefault();

    
}
	render(){
		return (
			<form autoComplete="off"  className="commentCreate">
				<label>Comment</label>
				<textarea className="comment-box" type="text" value={this.state.value} onChange={this.handleChange} />
				<button className="common-button" type="submit">Comment</button>
			</form>
		);
	}
}



export default CommentCreate;