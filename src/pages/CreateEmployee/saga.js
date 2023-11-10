import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';

import { createEmployee, login } from '@domain/api';

import { CREATE_EMPLOYEE } from '@pages/CreateEmployee/constants';
import { setSuccess } from '@pages/CreateEmployee/actions';

export function* doCreateEmployee({ data }) {
  try {
    const findUser = yield call(login, data);
    if (Object.keys(findUser).length > 0) {
      toast.error('User already exists');
      return;
    }
    const response = yield call(createEmployee, data);
    if (response) {
      yield put(setSuccess());
      toast.success('Create Employee successfully');
    }
  } catch (error) {
    toast.error('CteateEmployee error', error.message);
  }
}

export function* createEmployeeSaga() {
  yield takeLatest(CREATE_EMPLOYEE, doCreateEmployee);
}
