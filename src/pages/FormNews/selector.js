import { createSelector } from 'reselect';

import { initialState as initialStateApp } from '@containers/App/reducer';
import { initialState as initialStateClient } from '@containers/Client/reducer';
import { initialState as initialStateNews } from '@pages/FormNews/reducer';
import { initialState as initialStateHome } from '@pages/Home/reducer';

const selectAppState = (state) => state.app || initialStateApp;
export const selectLoading = createSelector(selectAppState, (state) => state.loading);

const selectClientState = (state) => state.client || initialStateClient;
export const selectLogin = createSelector(selectClientState, (state) => state.login);
export const selectUser = createSelector(selectClientState, (state) => state.user);

const selectFormNewsState = (state) => state.formNews || initialStateNews;
export const selectNews = createSelector(selectFormNewsState, (state) => state.news);

const selectHomeState = (state) => state.home || initialStateHome;
export const selectCategories = createSelector(selectHomeState, (state) => state.categories);
