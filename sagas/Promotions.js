import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { getPromotionsSuccess, getPromotionSuccess } from '../actions';
import { GET_PROMOTIONS, GET_PROMOTION } from '../constants/ActionsTypes';

import 
    { getPromotions, getPromotion }
from '../api/Promotions'


function* getPromotionsRequest({payload}) {
    try {
        const response = yield call(getPromotions, payload);
        yield put( getPromotionsSuccess(response) );
    } catch (error) {
        
    }
}

function* getPromotionRequest({payload}) {
    try {
        const response = yield call(getPromotion, payload);
        yield put( getPromotionSuccess(response) );
    } catch (error) {
        
    }
}

export function* getPromotionsSaga() {
    yield takeLatest(GET_PROMOTIONS, getPromotionsRequest);
}

export function* getPromotionSaga() {
    yield takeLatest(GET_PROMOTION, getPromotionRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getPromotionsSaga),
        fork(getPromotionSaga),
    ]);
}