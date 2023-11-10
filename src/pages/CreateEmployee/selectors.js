import { createSelector } from 'reselect';
import { initialState } from '@pages/CreateEmployee/reducer';

const selectCreateEmployeeState = (state) => state.createEmployee || initialState;

export const selectSuccess = createSelector(selectCreateEmployeeState, (state) => state.isSuccess);
