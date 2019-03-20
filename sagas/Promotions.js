import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { getPromotionsSuccess, getPromotionSuccess, updatePromotionSuccess, createPromotionSuccess } from '../actions';
import { GET_PROMOTIONS, GET_PROMOTION, UPDATE_PROMOTION, CREATE_PROMOTION } from '../constants/ActionsTypes';

import 
    { getPromotions, getPromotion, updatePromotion, createPromotion }
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

function* updatePromotionRequest({payload}) {
    const {promotionId, params} = payload;
    try {
        const response = yield call(updatePromotion, promotionId, params);
        yield put( updatePromotionSuccess(response) );
    } catch (error) {
        
    }
}

function* createPromotionRequest({payload}) {    
    
    try {
        const response = yield call(createPromotion, payload.params);
        yield put( createPromotionSuccess(response) );
    } catch (error) {
        
    }
}

export function* getPromotionsSaga() {
    yield takeLatest(GET_PROMOTIONS, getPromotionsRequest);
}

export function* getPromotionSaga() {
    yield takeLatest(GET_PROMOTION, getPromotionRequest);
}

export function* updatePromotionSaga() {
    yield takeLatest(UPDATE_PROMOTION, updatePromotionRequest);
}

export function* createPromotionSaga() {
    yield takeLatest(CREATE_PROMOTION, createPromotionRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getPromotionsSaga),
        fork(getPromotionSaga),
        fork(updatePromotionSaga),
        fork(createPromotionSaga),
    ]);
}