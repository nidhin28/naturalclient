import React from 'react';
import {Link} from 'react-router-dom';

import './about.css';

export default function About(props){
	return (
		<div className="about">
			<h2>Natural Remedy</h2>
			<p> Natural Remedy App is a Quick natural wellness solution provider ,where members can creat and share Natural solutions between people of all ages group, and sharing their experiences with solutions.</p>
			<p>To get started, click the registration link <Link to="/signup/">here</Link> or below to create a free profile. For return users, well, you will be taken in. Once you have successfully created your profile, you can immediately start creating, browsing and sharing your favorite remedy solutions for all the people to read!</p>
		</div>
	);
}