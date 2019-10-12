import React, { Component, Fragment } from 'react';

import apiFilmes from "../../services/api-filmes";
import MovieCard from '../../components/MovieCard'
import { MainHeader } from '../../styles/style'
import { MenuSelectedMovies, Button, CardContent } from './style'

class Main extends Component {
  state = {
    filmes: [],
    filmesSelecionados: []
  };

  async componentDidMount() {
    let response = await apiFilmes.get('/filmes');

    this.setState({
      filmes: response.data
    })

    console.log(this.state);
  }

  render() {
    const filmes = this.state.filmes
    const filmesSelecionados = this.state.filmesSelecionados
    return (
      <Fragment>
        <MainHeader>
          <h3>CAMPEONATO DE FILMES</h3>
          <h1>Fase de Seleção</h1>
          <hr />
          <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para processeguir</p>
        </MainHeader>

        <MenuSelectedMovies>
          <h4>Selecionados {filmesSelecionados.length} de 8 filmes</h4>
          <Button disabled={true}>GERAR MEU CAMPEONATO</Button>
        </MenuSelectedMovies>

        <CardContent>
          <ul>
            {filmes.map(filme => (
              <li key={filme.id}>
                <MovieCard filme={filme}></MovieCard>
              </li>
            ))}
          </ul>
        </CardContent>
      </Fragment>
    )
  }

}

export default Main;
