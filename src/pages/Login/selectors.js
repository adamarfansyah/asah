import { createSelector } from 'reselect';

import { initialState } from '@containers/App/reducer';

const selectAppState = (state) => state.app || initialState;

export const selectLoading = createSelector(selectAppState, (state) => state.loading);
