import { all } from 'redux-saga/effects';
import authSagas from './Auth'
import categorySagas from './Categories'
import promotionsSagas from './Promotions'


export default function* rootSaga(getState) {
    yield all([
        categorySagas(),
        promotionsSagas(),
        authSagas()
    ])
}
  