import { createSelector } from 'reselect';
import { initialState } from '@containers/Client/reducer';
import { initialState as initStateCreateEmployee } from '@pages/CreateEmployee/reducer';

const selectClientState = (state) => state.client || initialState;
const selectCreateEmployeeState = (state) => state.createEmployee || initStateCreateEmployee;

export const selectUser = createSelector(selectClientState, (state) => state.user);
export const selectSuccess = createSelector(selectCreateEmployeeState, (state) => state.isSuccess);
