import React from 'react';

import './textArea.css';

export default class TextArea extends React.Component {
	componentDidUpdate(prevProps){
		
			this.input.focus();
		
	}

	render() {
		let error;
		
			error = <div className="form-error">{this.props.meta.error}</div>;
		

		

		return (
			<div className="textArea">
				<label >
					
				</label>
				<textarea
					
				/>
				{error}
				
			</div>
		);
	}
}