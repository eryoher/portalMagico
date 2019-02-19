import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

import { GET_CATEGORIES, GET_CATEGORIES_WITH_PRODUCT } from '../constants/ActionsTypes';

import {    
    getCategories,
    getCategoriesWithProduct
} from '../api/Categories';

import { getCategoriesSuccess, getCategoriesWithProductSuccess } from '../actions/Categories';



function* getCategoriesWithProductRequest() {
    try {
        const response = yield call(getCategoriesWithProduct);
        yield put( getCategoriesWithProductSuccess(response) );
    } catch (error) {
        
    }
}

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



export function* getCategoriesWithProductSaga() {
    yield takeLatest(GET_CATEGORIES_WITH_PRODUCT, getCategoriesWithProductRequest);
}



export default function* rootSaga() {
    yield all([
        fork(getCategoriesSaga),
        fork(getCategoriesWithProductSaga),
    ]);
}