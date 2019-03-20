import { all } from 'redux-saga/effects';
import authSagas from './Auth'
import categorySagas from './Categories'
import promotionsSagas from './Promotions'
import usersSagas from './Users'
import paymentSaga from './Payments';

export default function* rootSaga(getState) {
    yield all([
        categorySagas(),
        promotionsSagas(),
        authSagas(),
        usersSagas(),
        paymentSaga()
    ])
}
  