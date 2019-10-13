import React, { Component, Fragment } from 'react';

import apiFilmes from "../../services/api-filmes";
import MovieCard from '../../components/MovieCard'
import { MainHeader } from '../../styles/style'
import { MenuSelectedMovies, Button, CardContent } from './style'

class Main extends Component {
  state = {
    filmes: [],
    btnGerar: true,
  };

  async componentDidMount() {
    let response = await apiFilmes.get('/filmes');

    this.setState({
      filmes: response.data.map(obj => ({ ...obj, selected: false }))
    })

    console.log(this.state);
  }

  selectMovie = e => {

    let filmes = this.state.filmes
    let btnGerar = true

    if (filmes.filter(x => x.selected).length < 8 && !e.selected) {
      filmes = filmes.map(obj => ({ ...obj, selected: obj.id === e.id ? true : obj.selected }))
    } else {
      filmes = filmes.map(obj => ({ ...obj, selected: obj.id === e.id ? false : obj.selected }))
    }

    if (filmes.filter(x => x.selected).length === 8) {
      btnGerar = false;
    }

    this.setState({
      filmes: filmes,
      btnGerar: btnGerar
    })
  }

  render() {
    const { filmes, btnGerar } = this.state
    const filmesSelecionados = filmes.filter(x => x.selected == true)

    return (
      <Fragment>
        <MainHeader>
          <h3>CAMPEONATO DE FILMES</h3>
          <h1>Fase de Seleção</h1>
          <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para processeguir</p>
        </MainHeader>

        <MenuSelectedMovies>
          <h4>Selecionados {filmesSelecionados.length} de 8 filmes</h4>
          <Button disabled={btnGerar}>GERAR MEU CAMPEONATO</Button>
        </MenuSelectedMovies>

        <CardContent>
          <ul>
            {filmes.map(filme => (
              <li key={filme.id}>
                <MovieCard filme={filme} onClick={this.selectMovie}></MovieCard>
              </li>
            ))}
          </ul>
        </CardContent>
      </Fragment>
    )
  }

}

export default Main;
