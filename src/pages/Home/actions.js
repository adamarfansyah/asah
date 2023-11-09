import { SET_NEWS_FAILURE, SET_NEWS_INIT, SET_NEWS_SUCCESS } from './constants';

export const setNewsAction = () => ({
  type: SET_NEWS_INIT,
});

export const setNewsSuccessAction = (news) => ({
  type: SET_NEWS_SUCCESS,
  news,
});

export const setNewsFailureAction = (error) => ({
  type: SET_NEWS_FAILURE,
  error,
});
