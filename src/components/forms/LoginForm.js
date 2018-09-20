import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from "react-router-dom";
import Input from '../inputs/Input';
import {required, nonEmpty} from '../../validators';

export class LoginForm extends React.Component{
	onSubmit(values){
		
	}

	render(){
		
		
		
		return (
			<form className="loginForm" autoComplete="off" >
				<h2 className="form-title">Login</h2>
				<label htmlFor="username">Username</label>
				<Field 
					name="username" 
					id="username" 
					type="text" 
					component={Input} 
					validate={[required, nonEmpty]} 
					value=""
				/>
				<label htmlFor="password">Password</label>
				<Field 
					name="password" 
					id="password" 
					type="password" 
					component={Input} 
					validate={[required, nonEmpty]}
					value=""
				/>
			    <Link to="/home">
				<button 
					className="common-button"
					type="submit" 
					
					
				>Login</button></Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0])),
})(LoginForm);
