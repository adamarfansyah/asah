import { takeLatest, call, put } from 'redux-saga/effects';

import { getCategoriesApi, getNewsApi } from '@domain/api';
import {
  getNewsSuccessAction,
  getNewsFailureAction,
  getCategoriesSuccessAction,
  getCategoriesFailureAction,
} from './actions';
import { GET_CATEGORIES_INIT, GET_NEWS_INIT } from './constants';

function* doGetNews() {
  try {
    const res = yield call(getNewsApi);
    yield put(getNewsSuccessAction(res));
  } catch (error) {
    yield put(getNewsFailureAction(error));
  }
}

function* doGetCategories() {
  try {
    const res = yield call(getCategoriesApi);
    yield put(getCategoriesSuccessAction(res));
  } catch (error) {
    yield put(getCategoriesFailureAction(error));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_NEWS_INIT, doGetNews);
  yield takeLatest(GET_CATEGORIES_INIT, doGetCategories);
}
