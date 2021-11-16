import axios from 'axios';
const KEY = 'AIzaSyDu4fmtZlOa1yp2Ons1paOUNAUwBt5ZVpo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});