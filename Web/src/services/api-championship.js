import axios from 'axios';

const apiChampionship = axios.create({
  baseURL: 'http://localhost:62236/api',
});

export default apiChampionship;
