import React from 'react';
import {Field, reduxForm} from 'redux-form';

import Input from '../inputs/Input';
import TextArea from '../inputs/TextArea';



import './postEdit.css';

export class PostEdit extends React.Component{
	onSubmit(values){
		
	}

	render(){
		return (
			<form 
				autoComplete="off" 
				
			>
				<label htmlFor="title">Title</label>
				<Field 
					name="title" 
					id="title" 
					type="text" 
					component={Input} 
					
				/>
				<label htmlFor="content">Content</label>
				<Field 
					name="content" 
					id="content" 
					type="text" 
					component={TextArea} 
					
				/>
				<button className="common-button" type="submit" >Update</button>
				<button className="warning-button" type="button" >Cancel</button>
			</form>
		);
	}
}




export default (reduxForm({form: 'create'})(PostEdit));