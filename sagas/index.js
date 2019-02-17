import { all } from 'redux-saga/effects';
import categorySagas from './categories'
import promotionsSagas from './Promotions'


export default function* rootSaga(getState) {
    yield all([
        categorySagas(),
        promotionsSagas()
    ])
}
  