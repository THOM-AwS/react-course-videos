import axios from 'axios';


const KEY = 'AIzaSyD8E9NgFZ6_nj8Hd76TjNEo7-II4LVnxrs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
