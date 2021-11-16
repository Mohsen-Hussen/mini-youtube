import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {
    const renderedVideoList = props.videos.map((video) => {
        return <VideoItem video={video}/>
    });
    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    )
}

export default VideoList;