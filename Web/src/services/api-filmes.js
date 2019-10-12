import axios from 'axios';

const apiFilmes = axios.create({
  baseURL: 'https://copadosfilmes.azurewebsites.net/api',
});

export default apiFilmes;
