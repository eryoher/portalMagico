import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { getPromotionsSuccess } from '../actions';
import { GET_PROMOTIONS } from '../constants/ActionsTypes';

import 
    { getPromotions }
from '../api/Promotions'


function* getPromotionsRequest({payload}) {
    try {
        const response = yield call(getPromotions, payload);
        yield put( getPromotionsSuccess(response) );
    } catch (error) {
        
    }
}

export function* getPromotionsSaga() {
    yield takeLatest(GET_PROMOTIONS, getPromotionsRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getPromotionsSaga),
    ]);
}