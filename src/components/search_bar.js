import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor( props ) {
  	super( props );

  	this.state = { term: 'Starting Value' };
  }

  render() {
    return (
    	<div>
			<input 
				value = { this.state.term }
				onChange = { event => this.setState( { term: event.target.value } ) } 
			/>
			Value of Input is { this.state.term }
		</div>
    );
  }
}