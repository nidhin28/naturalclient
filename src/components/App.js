


import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Heading from './Heading.js';
import './App.css';
import SignupPage from './SignupPage.js';
import LoginPage from './LoginPage.js';
import About from './About.js';






import Home from './Home.js';



import PostDisplayPage from './Post/PostDisplayPage.js';

import Search from './Search.js';

import {Redirect} from 'react-router-dom';





export function App(props){
	let heading = null;
heading = <Heading/>
			
	return (
		<Router>
			<div className="app">
				{heading}
				<main>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/signup/" component={SignupPage} />
					<Route exact path="/about/" component={About} />
					
					
					
					<Route exact path="/search/" component={Search} />
				</main>
			</div>
		</Router>
	);
}

export default App;
