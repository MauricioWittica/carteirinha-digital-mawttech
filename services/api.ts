import axios from 'axios';



const api = axios.create({
    baseURL: 'http://ndhs.org.br/maw-api/v1/public',
});

export default api; 