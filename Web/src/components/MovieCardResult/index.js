import React from 'react';

import { Card } from './style';

const MovieCardResult = ({ result, placeNumber }) =>
  <Card>
    <h2>{placeNumber}</h2>
    <div>
      <img alt={result.titulo} src={'./images/' + result.id + ".jpg"} />
      <h5>{result.titulo}</h5>
    </div>
  </Card>;

export default MovieCardResult;
