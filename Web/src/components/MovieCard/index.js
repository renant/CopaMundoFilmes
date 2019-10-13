import React from 'react';

import { Card } from './style';

const MovieCard = ({ movie, onClick }) =>
  <Card selected={movie.selected} onClick={() => onClick(movie)}>
    <h5>{movie.titulo}</h5>
    <img alt={movie.titulo} src={'./images/' + movie.id + ".jpg"} />
  </Card>;

export default MovieCard;
