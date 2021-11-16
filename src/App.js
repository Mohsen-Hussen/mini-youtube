import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Youtube from './components/api/Youtube';
import VideoList from './components/VideoList';

export class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar afterEnterSearchValue = {this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;