import { takeLatest, call, put } from 'redux-saga/effects';

import { getNewsByIdApi } from '@domain/api';
import { getNewsDetailFailure, getNewsDetailSuccess } from './actions';
import { GET_NEWS_DETAIL_INIT } from './constants';

function* doGetNewsDetail({ id }) {
  try {
    const res = yield call(getNewsByIdApi, id);
    yield put(getNewsDetailSuccess(res));
  } catch (error) {
    yield put(getNewsDetailFailure(error));
  }
}

export default function* newsDetailSaga() {
  yield takeLatest(GET_NEWS_DETAIL_INIT, doGetNewsDetail);
}
