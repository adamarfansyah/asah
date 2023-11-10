import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import homeReducer, { storedKey as storedHomeState } from '@pages/Home/reducer';
import detailReducer, { storedKey as storedNewsState } from '@pages/DetailNews/reducer';
import languageReducer from '@containers/Language/reducer';
import newsCategoryReducer from '@pages/Category/reducer';
import createEmployeeReducer from '@pages/CreateEmployee/reducer';
import formNewsReducer, { storedKey as storedFormNewsState } from '@pages/FormNews/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  createEmployee: { reducer: createEmployeeReducer },
  home: { reducer: homeReducer, whitelist: storedHomeState },
  newsDetail: { reducer: detailReducer, whitelist: storedNewsState },
  formNews: { reducer: formNewsReducer, whitelist: storedFormNewsState },
};

const temporaryReducers = {
  language: languageReducer,
  newsCategory: newsCategoryReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
