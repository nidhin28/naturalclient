import React from 'react';
import LoginForm from './forms/LoginForm.js';
import About from './About.js';
import {Redirect, Link} from 'react-router-dom';


import './loginPage.css';

export function LoginPage(props){
	if(props.loggedIn){
		return <Redirect to="/home/" />;
	}

	return (
		<div className="loginPage">
			<About />
			<LoginForm/>
			<p id="to-signup">Not a user? <Link to="/signup/">Register</Link> now!</p>
		</div>
	);
}


export default LoginPage ;
