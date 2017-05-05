import React, { Component } from 'react';

export default class VideoDetail extends Component {

	render() {
		const video = this.props.video;

		if ( !video ) {
			return (
				<div>No Video...</div>
			)
		}

		const _videoId = video.id.videoId;
		const url = `https://www.youtube.com/embed/${ _videoId }`;
		return (
			<div className="video-detail">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={ url } />
				</div>
				<div className="details">
					<div>
						{ video.snippet.title }
					</div>
					<div>
						{ video.snippet.description }
					</div>
				</div>
			</div>
		)
	}
}
