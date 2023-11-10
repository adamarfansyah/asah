import { produce } from 'immer';

import { RESET_NEWS, SET_NEWS_BY_ID } from '@pages/FormNews/constants';

export const initialState = {
  news: null,
};

export const storedKey = ['news'];

const formNewsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_NEWS_BY_ID:
        draft.news = action.data;
        break;
      case RESET_NEWS:
        return initialState;
    }
  });

export default formNewsReducer;
