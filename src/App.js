import React , {useState , useEffect} from 'react';
import useVideos from './components/hooks/useVideos';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
  const [selectedVideo , setSelectedVideo] = useState(null);
  const [videos , search] = useVideos('elzero web school');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  },[videos]);

  return (
    <div className="ui container">
        <SearchBar afterEnterSearchValue = {search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={(video) => {setSelectedVideo(video)}} videos={videos}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;