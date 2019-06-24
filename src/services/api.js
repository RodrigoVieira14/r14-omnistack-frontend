import axios from 'axios';

const api = axios.create({
    baseURL: 'https://r14-omnistack-backend.herokuapp.com'
});

export default api;