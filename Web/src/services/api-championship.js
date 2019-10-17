import axios from 'axios';

const apiChampionship = axios.create({
  baseURL: 'https://localhost:44365/api',
});

export default apiChampionship;
