import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos , onVideoSelect}) {
    const renderedVideoList = videos.map((video) => {
        return <VideoItem onVideoSelect = {onVideoSelect} video={video}/>
    });
    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    )
}

export default VideoList;