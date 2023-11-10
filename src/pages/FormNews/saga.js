import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';

import { ADD_NEWS, DELETE_NEWS, EDIT_NEWS, GET_NEWS_BY_ID } from '@pages/FormNews/constants';

import { setLoading } from '@containers/App/actions';
import { addNews, deleteNews, editNews, getNewsById } from '@domain/api';
import { setNewsById } from './actions';

export function* doAddNews({ data }) {
  yield put(setLoading(true));
  try {
    const response = yield call(addNews, data);
    toast.success(`News Created with title :  ${response.title}`);
  } catch (error) {
    toast.error(`Add news error : ${error.message}`);
  }
  yield put(setLoading(false));
}

export function* doDeleteNews({ id }) {
  yield put(setLoading(true));
  try {
    yield call(deleteNews, id);
    toast.success(`Delete News with id : ${id} successfully`);
  } catch (error) {
    toast.error(`Delete news error : ${error.message}`);
  }
  yield put(setLoading(false));
}

export function* doEditNews({ data }) {
  yield put(setLoading(true));
  try {
    yield call(getNewsById, data.id);
    const response = yield call(editNews, data.id, data);
    toast.success(`Edit news Successfully, with title : ${response?.title}`);
  } catch (error) {
    console.log(error);
    toast.error(`Edit news error : ${error.message}`);
  }
  yield put(setLoading(false));
}
export function* doGetNewsById({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getNewsById, id);
    yield put(setNewsById(response));
  } catch (error) {
    console.log(error);
    toast.error(`Get news error : ${error.message}`);
  }
  yield put(setLoading(false));
}

export function* formNewsSaga() {
  yield takeLatest(ADD_NEWS, doAddNews),
    yield takeLatest(EDIT_NEWS, doEditNews),
    yield takeLatest(DELETE_NEWS, doDeleteNews),
    yield takeLatest(GET_NEWS_BY_ID, doGetNewsById);
}
