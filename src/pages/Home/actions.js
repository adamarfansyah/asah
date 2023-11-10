import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_INIT,
  GET_CATEGORIES_SUCCESS,
  GET_NEWS_FAILURE,
  GET_NEWS_INIT,
  GET_NEWS_SUCCESS,
} from './constants';

export const getNewsAction = () => ({
  type: GET_NEWS_INIT,
});

export const getNewsSuccessAction = (news) => ({
  type: GET_NEWS_SUCCESS,
  news,
});

export const getNewsFailureAction = (error) => ({
  type: GET_NEWS_FAILURE,
  error,
});

export const getCategoriesAction = () => ({
  type: GET_CATEGORIES_INIT,
});

export const getCategoriesSuccessAction = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories,
});

export const getCategoriesFailureAction = (error) => ({
  type: GET_CATEGORIES_FAILURE,
  error,
});
