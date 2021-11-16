import React from 'react';
import './VideoItem.css';

function VideoItem(props) {
    return (
        <div className="video-item item">
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} className="ui image"/>
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;