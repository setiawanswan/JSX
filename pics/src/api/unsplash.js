import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 67f7b96fd143ea1d361c76aaf1e096d47e51fc5213db7a8a9cbb9115b5da6967'
    }
});