import React, { Component, Fragment } from 'react';

import { MainHeader } from '../../styles/style'

export default class Result extends Component {
  render() {
    return (
      <Fragment>
        <MainHeader>
          <h3>CAMPEONATO DE FILMES</h3>
          <h1>Resultado Final</h1>
          <p>Veja o resultado final do Campeonato de filmes de forma simples e rápida</p>
        </MainHeader>
      </Fragment>);
  }
}
