import React from 'react';

import {NavLink} from 'react-router-dom';

import './heading.css';
import logo from '../logo.jpg';

export class Heading extends React.Component{
	

	render(){
		
		return (
			<header className="heading">
				<img className="logo" src={logo} alt="Natural remedy website logo" />
				<ul className="link-list">
					<li><NavLink className="link" to="/home/">Home</NavLink></li>
					<li><NavLink className="link" to="/search/">Search</NavLink></li>
					
					<li className="logout" >Logout</li>
					
					
				</ul>
			</header>
		);
	}
}



export default Heading;
