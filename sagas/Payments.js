import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import 
    { createPreference, createGiftCard, createTokenCard }
from '../api/Payments'

import { CREATE_PREFERENCE, CREATE_GIFT_CARD, CREATE_TOKEN_CARD } from '../constants/ActionsTypes';
import { createPreferenceSuccess, createGiftCardSuccess, createTokenCardSuccess } from '../actions';


function* createPreferenceRequest({payload}) {
    
    try {
        const response = yield call(createPreference, payload);
        yield put( createPreferenceSuccess (response) );
    } catch (error) {
        
    }
}

function* createGiftCardRequest({payload}) {
    console.log(payload, 'aca');
    
    const {params, token} = payload;
    try {
        const card = yield call(createGiftCard, params, token);
        yield put( createGiftCardSuccess (card) );
    } catch (error) {
        console.log(error);
        
    }
}

function* createTokenCardRequest() {
    
    try {
        const card = yield call(createTokenCard);
        yield put( createTokenCardSuccess (card) );
    } catch (error) {
        
    }
}

export function* createPreferenceSaga() {
    yield takeLatest(CREATE_PREFERENCE, createPreferenceRequest);
}

export function* createGiftCardSaga() {
    yield takeLatest(CREATE_GIFT_CARD, createGiftCardRequest);
}

export function* createTokenCardSaga() {
    yield takeLatest(CREATE_TOKEN_CARD, createTokenCardRequest);
}


export default function* rootSaga() {
    yield all([
        fork(createPreferenceSaga),
        fork(createTokenCardSaga),
        fork(createGiftCardSaga),
    ]);
}