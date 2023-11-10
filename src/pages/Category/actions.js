import {
  GET_NEWS_CATEGORY_FAILURE,
  GET_NEWS_CATEGORY_SUCCESS,
  GET_NEWS_CATEGORY_INIT,
  GET_CATEGORY_INIT,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from './constants';

export const getNewsCategoryAction = (categoryName) => ({
  type: GET_NEWS_CATEGORY_INIT,
  categoryName,
});

export const getNewsCategorySuccessAction = (newsCategory) => ({
  type: GET_NEWS_CATEGORY_SUCCESS,
  newsCategory,
});

export const getNewsCategoryFailureAction = (error) => ({
  type: GET_NEWS_CATEGORY_FAILURE,
  error,
});

export const getCategoryAction = (categoryName) => ({
  type: GET_CATEGORY_INIT,
  categoryName,
});

export const getCategorySuccessAction = (category) => ({
  type: GET_CATEGORY_SUCCESS,
  category,
});

export const getCategoryFailureAction = (error) => ({
  type: GET_CATEGORY_FAILURE,
  error,
});
