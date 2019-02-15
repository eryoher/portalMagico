import { all } from 'redux-saga/effects';
import categorySagas from './categories'

export default function* rootSaga(getState) {
    yield all([
        categorySagas(),
    ])
}
  