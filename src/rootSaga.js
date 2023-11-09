import { all } from 'redux-saga/effects';

import { loginSaga } from '@pages/Login/saga';

export default function* rootSaga() {
  yield all([loginSaga()]);
}
