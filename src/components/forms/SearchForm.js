import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    
  }

  handleSubmit(event) {
    event.preventDefault();

    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search</label>
        <input className="search-input" type="text"  onChange={this.handleChange} />
      </form>
    );
  }
}