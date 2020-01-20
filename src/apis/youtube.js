import axios from 'axios';

const KEY = 'AIzaSyCx3sggJWLkhTW4dfnH-dYlXT97bZJQ6uI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});


