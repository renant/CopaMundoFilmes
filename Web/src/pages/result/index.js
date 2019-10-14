import React, { Component, Fragment } from 'react';

import { MainHeader } from '../../styles/style'

import { connect } from "react-redux";

class Result extends Component {

  componentWillMount() {
    console.log(this.props)
    if (!this.props.result && this.props.loading === false) {
      this.props.history.push('/')
    }
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
          <h2 style={{ color: 'white' }}>
            Loading...
          </h2>
        }
        {!loading &&
          <div>
            <div>
              <img alt={result.firstPlace.titulo} src={'./images/' + result.firstPlace.id + ".jpg"} />
              <h2>{result.firstPlace.titulo}</h2>
            </div>
          </div>
        }

      </Fragment>);
  }
}


const mapStateToProps = state => ({
  result: state.movies.data,
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Result)
