import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';

import { login } from '@domain/api';

import { USER_LOGIN } from '@pages/Login/constants';

import { setLogin, setUser } from '@containers/Client/actions';
import { setLoading } from '@containers/App/actions';

export function* doLogin({ data }) {
  yield put(setLoading(true));
  try {
    const response = yield call(login, data);
    if (Object.keys(response).length === 0) {
      toast.error('User not found');
      return;
    }
    if (response[0].password === data?.password) {
      const { password, ...userInfo } = response[0];
      yield put(setUser(userInfo));
      yield put(setLogin(true));
      window.location.href = '/';
    } else {
      toast.error('Invalid credential');
    }
  } catch (error) {
    toast.error('Login error', error.message);
  } finally {
    yield put(setLoading(false));
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN, doLogin);
}
