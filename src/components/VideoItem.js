import React from 'react'

function VideoItem(props) {
    return (
        <div>
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            {props.video.snippet.title}
        </div>
    )
}

export default VideoItem;