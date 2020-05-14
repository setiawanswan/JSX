import axios from 'axios'

const KEY = 'AIzaSyCFeVCXP891SnuCNh1Ci_qHwMDr2vKpgMQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
});
