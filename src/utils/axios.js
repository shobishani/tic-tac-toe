import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 1000,
    headers: {'Content-type': 'application/json'}
});

export default instance;