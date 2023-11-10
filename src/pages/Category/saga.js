import { takeLatest, call, put } from 'redux-saga/effects';

import { getCategoryByNameApi, getNewsByCategoryApi } from '@domain/api';
import { GET_CATEGORY_INIT, GET_NEWS_CATEGORY_INIT } from './constants';
import {
  getCategoryFailureAction,
  getCategorySuccessAction,
  getNewsCategoryFailureAction,
  getNewsCategorySuccessAction,
} from './actions';

function* doGetNewsCategory({ categoryName }) {
  try {
    const res = yield call(getNewsByCategoryApi, categoryName);
    yield put(getNewsCategorySuccessAction(res));
  } catch (error) {
    yield put(getNewsCategoryFailureAction(error));
  }
}

function* doGetCategory({ categoryName }) {
  try {
    const res = yield call(getCategoryByNameApi, categoryName);
    yield put(getCategorySuccessAction(res));
  } catch (error) {
    yield put(getCategoryFailureAction(error));
  }
}

export default function* newsCategorySaga() {
  yield takeLatest(GET_NEWS_CATEGORY_INIT, doGetNewsCategory);
  yield takeLatest(GET_CATEGORY_INIT, doGetCategory);
}
