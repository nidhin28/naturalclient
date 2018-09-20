import React from 'react';
import SignupForm from './forms/SignupForm.js';
import {Redirect, Link} from 'react-router-dom';


import './signupPage.css';

export function SignupPage(props){
	if(props.loggedIn){
		return <Redirect to="/home/" />;
	}

	return (
		<div className="signupPage">
			<h2>Register</h2>
			<SignupForm/>
			<p><Link to="/">Back to login</Link></p>
		</div>
	);
}


export default SignupPage;
