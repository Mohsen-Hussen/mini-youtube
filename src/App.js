import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Youtube from './components/api/Youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

export class App extends Component {
  state = { videos: [] , selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (video) => {
    console.log('video from app' , video);
    this.setState({selectedVideo: video});
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar afterEnterSearchValue = {this.onTermSubmit}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;