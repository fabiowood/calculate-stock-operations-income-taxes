/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';

// The store needs the middlewares, which are actually functions that receive inputs and produce new inputs, so we can capture each action and direct it to the root reducer. We will put the middlewares as an array, in order to make it easier for us to add new middlewares to the logger. 

const middlewares = [logger];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
};

// Translating the code: we are creating a new rootReducer, with the configurations we want, so the desired reducers to persist their states. The reducers that must persist are the ones listed inside the 'whitelist' property.

const persistConfig = {
  key: 'root',
  storage,
  timeout: null,
  whitelist: ['calculateIncomeTaxes'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

// The persistor is using the redux-persist library, so we can make the configurations necessary to create a 'cache' of the Store, which will allow the application to persist the store, and therefore, to persist the currentState, even if there is a refresh, or if the user closes the tab/browser.
