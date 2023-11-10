import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppState = (state) => state.app || initialState;
const selectDetailState = (state) => state.newsDetail || initialState;

export const selectLocale = createSelector(selectAppState, (state) => state.locale);
export const selectTheme = createSelector(selectAppState, (state) => state.theme);
export const selectPopup = createSelector(selectAppState, (state) => state.popup);
export const selectLoading = createSelector(selectAppState, (state) => state.loading);

export const selectNewsDetail = createSelector(selectDetailState, (state) => state.newsDetail);
export const selectIsLoading = createSelector(selectDetailState, (state) => state.isLoading);
