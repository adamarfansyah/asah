import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import homeReducer from '@pages/Home/reducer';
import detailReducer from '@pages/DetailNews/reducer';
import languageReducer from '@containers/Language/reducer';

import createEmployeeReducer from '@pages/CreateEmployee/reducer';
import formNewsReducer, { storedKey as storedFormNewsState } from '@pages/FormNews/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  createEmployee: { reducer: createEmployeeReducer },
  formNews: { reducer: formNewsReducer, whitelist: storedFormNewsState },
};

const temporaryReducers = {
  language: languageReducer,
  home: homeReducer,
  newsDetail: detailReducer,
  createEmployee: createEmployeeReducer,
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
