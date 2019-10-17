import React, { Component, Fragment } from 'react';

import MovieCardResult from '../../components/MovieCardResult';
import { MainHeader, Loading, Button } from '../../styles/style'
import { ResultContent } from './style';

import { connect } from "react-redux";

class Result extends Component {

  componentWillMount() {
    if (!this.props.result && this.props.loading === false) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.result && nextProps.loading === false) {
      this.props.history.push('/')
    }
  }

  goToMain = () => {
    this.props.history.push('/')
  }

  render() {
    const { result, loading } = this.props;
    return (
      <Fragment>
        <MainHeader>
          <h3>CAMPEONATO DE FILMES</h3>
          <h1>Resultado Final</h1>
          <p>Veja o resultado final do Campeonato de filmes de forma simples e rápida</p>
        </MainHeader>
        {loading &&
          <Loading>
            <i style={{ color: 'white' }} className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          </Loading>
        }
        {!loading && result &&
          <ResultContent>
            <MovieCardResult result={result.firstPlace} placeNumber="1º"></MovieCardResult>
            <MovieCardResult result={result.secondPlace} placeNumber="2º"></MovieCardResult>
            <div>
              <Button onClick={this.goToMain}>TENTAR NOVAMENTE</Button>
            </div>
          </ResultContent>
        }

      </Fragment>);
  }
}


const mapStateToProps = state => ({
  result: state.movies.data,
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Result)
