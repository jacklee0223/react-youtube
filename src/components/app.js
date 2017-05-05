import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

export default class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			videos: []
		};

		YTSearch( {
			key: this.props.apiKey,
			term: 'surfboard'
		}, videos => { this.setState( { videos } ) } )
	}

	render() {
		return (
			<div>
				<h3>
				  	React simple starter
				</h3>
				<SearchBar />
				<VideoDetail video={ this.state.videos[0] } />
				<VideoList videos={ this.state.videos } />
			</div>
		);
	}
}