import { produce } from 'immer';

import { SET_NEWS_FAILURE, SET_NEWS_INIT, SET_NEWS_SUCCESS } from './constants';

export const initialState = {
  isLoading: false,
  isError: '',
  news: [
    {
      id: 1,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'test',
      desc: '<div>ehehehehhehe</div>',
      date: '22 November 2023',
      author: 'Adam Sake A',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  categories: [
    { id: 1, category: 'Sports' },
    { id: 2, category: 'E-Sports' },
    { id: 3, category: 'Politics' },
    { id: 4, category: 'Software Developments' },
  ],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_NEWS_INIT:
        draft.isLoading = true;
        break;
      case SET_NEWS_SUCCESS:
        draft.news = action.news;
        break;
      case SET_NEWS_FAILURE:
        draft.isError = action.error;
        break;
    }
  });

export default homeReducer;
