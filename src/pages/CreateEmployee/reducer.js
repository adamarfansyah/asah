import { produce } from 'immer';

import { SET_RESET, SET_SUCCESS } from '@pages/CreateEmployee/constants';

export const initialState = {
  isSuccess: false,
};

const createEmployeeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_SUCCESS:
        draft.isSuccess = true;
        break;
    }
    switch (action.type) {
      case SET_RESET:
        draft.isSuccess = false;
        break;
    }
  });

export default createEmployeeReducer;
