import { put, delay } from "redux-saga/effects";
import { Creators as MoviesActions } from '../ducks/movies';

export function* runChampionship(action) {
  try {
    let first = action.payload.movies[0];
    let second = action.payload.movies[1];

    yield delay(2000)
    yield put(MoviesActions.setResult({
      firstPlace: first,
      secondPlace: second,
    }))


  } catch (err) {
    console.log(err);
  }
}
