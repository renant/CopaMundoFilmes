import { put, delay, call } from "redux-saga/effects";
import { Creators as MoviesActions } from '../ducks/movies';

import { toast } from "react-toastify";
import apiChampionship from '../../services/api-championship';

export function* runChampionship(action) {
  try {
    const { data } = yield call(apiChampionship.post, '/championship', action.payload.movies);

    yield put(MoviesActions.setResult({
      firstPlace: data.firstPlace,
      secondPlace: data.secondPlace
    }))

  } catch (err) {
    yield put(MoviesActions.setErrorResult());

    if (err.response.data.errors) {
      toast.error(err.response.data.errors[0], {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error("Erro ao processar os resultados, tente novamente mais tarde", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
}
