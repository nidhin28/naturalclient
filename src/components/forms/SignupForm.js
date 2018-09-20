import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../redux/actions/user';
import Input from '../inputs/Input';
import { Link } from "react-router-dom";


export class SignupForm extends React.Component{
	onSubmit(values){
		const {username, password, displayName} = values;
		const user = {username, password, displayName};
		return this.props
			.dispatch(registerUser(user))
			.then(() => {
				this.props.history.push('/');
			});
	}

	render(){
		return (
			<form autoComplete="off" >
				<label htmlFor="username">Username</label>
				<Field 
					name="username" 
					id="username" 
					type="text" 
					component={Input} 
					
				/>
				<label htmlFor="displayName">Display Name</label>
				<Field name="displayName" id="displayName" type="text" component={Input} />
				<label htmlFor="password">Password</label>
				<Field 
					name="password" 
					id="password" 
					type="password" 
					component={Input} 
					
				/>
				<label htmlFor="passwordConfirm">Retype Password</label>
				<Field 
					name="passwordConfirm" 
					id="passwordConfirm" 
					type="password" 
					component={Input} 
					
				 />
				 <Link to="/home">
				<button className="common-button" type="submit" >Register</button></Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	onSubmitFail: (errors, dispatch) => dispatch(focus('signup', Object.keys(errors)[0])),
})(SignupForm);