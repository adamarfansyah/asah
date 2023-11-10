import { all } from 'redux-saga/effects';

import { loginSaga } from '@pages/Login/saga';
import { createEmployeeSaga } from '@pages/CreateEmployee/saga';

export default function* rootSaga() {
  yield all([loginSaga(), createEmployeeSaga()]);
}
