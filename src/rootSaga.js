import { all } from 'redux-saga/effects';

import { loginSaga } from '@pages/Login/saga';
import { createEmployeeSaga } from '@pages/CreateEmployee/saga';
import homeSaga from '@pages/Home/saga';
import newsDetailSaga from '@pages/DetailNews/saga';
import { formNewsSaga } from '@pages/FormNews/saga';

export default function* rootSaga() {
  yield all([loginSaga(), homeSaga(), newsDetailSaga(), createEmployeeSaga(), formNewsSaga()]);
}
