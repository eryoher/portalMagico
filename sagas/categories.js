import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import { GET_CATEGORIES } from '../constants/ActionsTypes';

import {    
    getCategories
} from '../api/Categories';


import { getCategoriesSuccess } from '../actions/Categories';



function* getCategoriesRequest() {
    try {
        const response = yield call(getCategories);
        yield put( getCategoriesSuccess(response) );
    } catch (error) {
        
    }
}


export function* getCategoriesSaga() {
    yield takeLatest(GET_CATEGORIES, getCategoriesRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getCategoriesSaga),
    ]);
}