import React, { Component, Fragment } from 'react';

import apiMovies from "../../services/api-movies";
import MovieCard from '../../components/MovieCard'
import { MainHeader } from '../../styles/style'
import { MenuSelectedMovies, Button, CardContent } from './style'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MovieActions } from '../../store/ducks/movies';

class Main extends Component {
  state = {
    movies: [],
    btnDisable: true,
  };

  async componentDidMount() {
    let response = await apiMovies.get('/filmes');

    this.setState({
      movies: response.data.map(obj => ({ ...obj, selected: false }))
    })

  }

  selectMovie = e => {

    let movies = this.state.movies
    let btnDisable = true

    if (movies.filter(x => x.selected).length < 8 && !e.selected) {
      movies = movies.map(obj => ({ ...obj, selected: obj.id === e.id ? true : obj.selected }))
    } else {
      movies = movies.map(obj => ({ ...obj, selected: obj.id === e.id ? false : obj.selected }))
    }

    if (movies.filter(x => x.selected).length === 8) {
      btnDisable = false;
    }

    this.setState({
      movies: movies,
      btnDisable: btnDisable
    })
  }

  runChampionship = e => {
    e.preventDefault();
    const { runChampionship } = this.props;
    runChampionship(this.state.movies.filter(x => x.selected === true));
    this.props.history.push('/result')
  }

  render() {
    const { movies, btnDisable } = this.state
    const moviesSelected = movies.filter(x => x.selected === true)

    return (
      <Fragment>
        <MainHeader>
          <h3>CAMPEONATO DE FILMES</h3>
          <h1>Fase de Seleção</h1>
          <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para processeguir</p>
        </MainHeader>

        <MenuSelectedMovies>
          <h4>Selecionados {moviesSelected.length} de 8 filmes</h4>
          <Button onClick={this.runChampionship} disabled={btnDisable}>GERAR MEU CAMPEONATO</Button>
        </MenuSelectedMovies>

        <CardContent>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <MovieCard movie={movie} onClick={this.selectMovie}></MovieCard>
              </li>
            ))}
          </ul>
        </CardContent>
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MovieActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)
