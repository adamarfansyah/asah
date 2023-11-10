import { GET_NEWS_DETAIL_INIT, GET_NEWS_DETAIL_SUCCESS, GET_NEWS_DETAIL_FAILURE } from './constants';

export const getNewsDetailAction = (id) => ({
  type: GET_NEWS_DETAIL_INIT,
  id,
});

export const getNewsDetailSuccess = (news) => ({
  type: GET_NEWS_DETAIL_SUCCESS,
  news,
});

export const getNewsDetailFailure = (error) => ({
  type: GET_NEWS_DETAIL_FAILURE,
  error,
});
