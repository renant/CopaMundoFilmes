import { all, takeLatest } from 'redux-saga/effects'

import { Types as MovieTypes } from '../ducks/movies';
import { runChampionship } from './movies'

export default function* rootSaga() {
  yield all([takeLatest(MovieTypes.RUN_CHAMPIONSHIP, runChampionship)])
}
