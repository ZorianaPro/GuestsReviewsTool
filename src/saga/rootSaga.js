import { all } from 'redux-saga/effects';
import { watchRequestReviews } from './reviews';

export default function* rootSaga() {
  yield all([watchRequestReviews()]);
}