import React, { Component } from 'react';

export default class VideoListItem extends Component {
	render() {
		const video = this.props.video;
		const onVideoSelect = this.props.onVideoSelect;
		const imgUrl = video.snippet.thumbnails.default.url;
		return (
			<li className="list-group-item" onClick={ () => onVideoSelect( video ) } >
				<div className="video-list media">
					<img className="media-object" src={ imgUrl } />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{ video.snippet.title }
					</div>
				</div>
			</li>
		)
	}
}