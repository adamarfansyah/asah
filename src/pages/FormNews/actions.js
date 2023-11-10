import {
  ADD_NEWS,
  DELETE_NEWS,
  EDIT_NEWS,
  GET_NEWS_BY_ID,
  RESET_NEWS,
  SET_NEWS_BY_ID,
} from '@pages/FormNews/constants';

export const addNews = (data) => ({
  type: ADD_NEWS,
  data,
});
export const editNews = (data) => ({
  type: EDIT_NEWS,
  data,
});
export const getNewsById = (id) => ({
  type: GET_NEWS_BY_ID,
  id,
});
export const setNewsById = (data) => ({
  type: SET_NEWS_BY_ID,
  data,
});
export const deleteNews = (id) => ({
  type: DELETE_NEWS,
  id,
});
export const resetNews = () => ({
  type: RESET_NEWS,
});
