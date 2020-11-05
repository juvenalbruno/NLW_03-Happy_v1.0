import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.15:3333' //mudar de acordo com o ip do expo
});

export default api;