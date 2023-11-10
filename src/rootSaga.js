import { all } from 'redux-saga/effects';

import { loginSaga } from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import newsDetailSaga from '@pages/DetailNews/saga';

export default function* rootSaga() {
  yield all([loginSaga(), homeSaga(), newsDetailSaga()]);
}
