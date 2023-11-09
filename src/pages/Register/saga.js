import { call, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';

import { login } from '@domain/api';

import { USER_LOGIN } from '@pages/Login/constants';

export function* doLogin({ data }) {
  try {
    const response = yield call(login, data);
    if (Object.keys(response).length === 0) {
      toast.error('User not found');
    }
    if (response[0].password === data?.password) {
      const { password, ...rest } = response[0];
      localStorage.setItem('user', JSON.stringify(rest));
      window.location.href = '/';
    } else {
      return toast.error('Invalid credential');
    }
  } catch (error) {
    toast.error('Login error', error.message);
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN, doLogin);
}
