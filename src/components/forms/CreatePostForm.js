import React from 'react';
import {Field, reduxForm} from 'redux-form';

import Input from '../inputs/Input';
import TextArea from '../inputs/TextArea';


export class CreatePostForm extends React.Component{
	onSubmit(values){
		const {title, content} = values;
		
	}

	render(){
		return (
			<form autoComplete="off" onSubmit=onSubmit(values))>
				<label htmlFor="title">Title</label>
				<Field 
					name="title" 
					id="title" 
					type="text" 
					component={Input} 
					
					value=""
				/>
				<label htmlFor="content">Content</label>
				<Field 
					name="content" 
					id="content" 
					type="text" 
					component={TextArea} 
					
					value=""
				/>
				<button 
					className="common-button"
					type="submit" 
				>Create</button>
			</form>
		);
	}
}

export default reduxForm({form: 'create'})(CreatePostForm);