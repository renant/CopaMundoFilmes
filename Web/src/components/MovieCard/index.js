import React from 'react';

import { Card } from './style';

const MovieCard = ({ filme, onClick }) =>
  <Card selected={filme.selected} onClick={() => onClick(filme)}>
    <h5>{filme.titulo}</h5>
    <img src={'./images/' + filme.id + ".jpg"} />
  </Card>;

export default MovieCard;
