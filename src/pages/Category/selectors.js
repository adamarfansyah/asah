import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppState = (state) => state.app || initialState;
const selectNewsCategoryState = (state) => state.newsCategory || initialState;
const selectHomeState = (state) => state.home || initialState;

export const selectLocale = createSelector(selectAppState, (state) => state.locale);
export const selectTheme = createSelector(selectAppState, (state) => state.theme);
export const selectPopup = createSelector(selectAppState, (state) => state.popup);
export const selectLoading = createSelector(selectAppState, (state) => state.loading);

export const selectCategories = createSelector(selectHomeState, (state) => state.categories);

export const selectIsLoading = createSelector(selectNewsCategoryState, (state) => state.isLoading);
export const selectNewsCategory = createSelector(selectNewsCategoryState, (state) => state.newsCategory);
export const selectCategory = createSelector(selectNewsCategoryState, (state) => state.category);
