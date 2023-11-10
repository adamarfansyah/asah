import { produce } from 'immer';

import { GET_NEWS_DETAIL_FAILURE, GET_NEWS_DETAIL_INIT, GET_NEWS_DETAIL_SUCCESS } from './constants';

export const initialState = {
  isLoading: false,
  isError: '',
  newsDetail: {},
};

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_NEWS_DETAIL_INIT:
        draft.isLoading = true;
        break;
      case GET_NEWS_DETAIL_SUCCESS:
        draft.isLoading = false;
        draft.newsDetail = action.news;
        break;
      case GET_NEWS_DETAIL_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
    }
  });

export default detailReducer;
