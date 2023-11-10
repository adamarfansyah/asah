import { produce } from 'immer';

import {
  GET_NEWS_FAILURE,
  GET_NEWS_INIT,
  GET_NEWS_SUCCESS,
  GET_CATEGORIES_INIT,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from './constants';

export const initialState = {
  isLoading: false,
  isError: '',
  news: [],
  categories: [],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_NEWS_INIT:
        draft.isLoading = true;
        break;
      case GET_NEWS_SUCCESS:
        draft.isLoading = false;
        draft.news = action.news;
        break;
      case GET_NEWS_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
      case GET_CATEGORIES_INIT:
        draft.isLoading = true;
        break;
      case GET_CATEGORIES_SUCCESS:
        draft.isLoading = false;
        draft.categories = action.categories;
        break;
      case GET_CATEGORIES_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
    }
  });

export default homeReducer;
