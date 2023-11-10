import { produce } from 'immer';

import {
  GET_NEWS_CATEGORY_INIT,
  GET_NEWS_CATEGORY_SUCCESS,
  GET_NEWS_CATEGORY_FAILURE,
  GET_CATEGORY_INIT,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from './constants';

export const initialState = {
  isLoading: false,
  isError: '',
  newsCategory: [],
  category: {},
};

const newsCategoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_NEWS_CATEGORY_INIT:
        draft.isLoading = true;
        break;
      case GET_NEWS_CATEGORY_SUCCESS:
        draft.isLoading = false;
        draft.newsCategory = action.newsCategory;
        break;
      case GET_NEWS_CATEGORY_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
      case GET_CATEGORY_INIT:
        draft.isLoading = true;
        break;
      case GET_CATEGORY_SUCCESS:
        draft.isLoading = false;
        draft.category = action.category;
        break;
      case GET_CATEGORY_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
    }
  });

export default newsCategoryReducer;
