import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './ducks';

import history from '../routes/history';

const middlewares = [thunkMiddleware, routerMiddleware(history)];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export { store, persistor };
