import { takeEvery, put, call } from 'redux-saga/effects';
import { actions } from '../../redux/reviews/actions';
import config from '../../services/config';

export function* fetchReviews(action) {
  try {
    const data = yield fetch(`${config.api.reviews}?${new URLSearchParams(action.value)}`);
    const count = data.headers.get('X-Total-Count');
    const reviews = yield data.json();
    yield put({ type: actions.setReviews, reviews });
    yield put({ type: actions.setPages, count })
  } catch (error) {
    yield put({ type: actions.setError, error })
  }
}

export function* watchRequestReviews() {
  yield takeEvery(actions.requestReviews, fetchReviews);
}