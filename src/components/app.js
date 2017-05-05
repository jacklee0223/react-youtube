import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

export default class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch( 'surfboards' );
	}

	videoSearch( term ) {
		YTSearch( {
			key: this.props.apiKey,
			term: term
		}, videos => { this.setState( {
			videos,
			selectedVideo: videos[0]
		} ) } )
	}

	render() {
		const videoSearch = _.debounce( term => { this.videoSearch( term ) }, 300 );
		return (
			<div>
				<SearchBar onSearchTermChange = { videoSearch } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList
					videos={ this.state.videos }
					onVideoSelect={ selectedVideo => this.setState( { selectedVideo } ) }
				/>
			</div>
		);
	}
}