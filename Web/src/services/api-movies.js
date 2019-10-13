import axios from 'axios';

const apiMovies = axios.create({
  baseURL: 'https://copadosfilmes.azurewebsites.net/api',
});

export default apiMovies;
