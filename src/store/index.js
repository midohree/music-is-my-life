import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';

import { TOP_ALBUMS, topAlbumsReducer } from '../features/topAlbums/slice';
import { watchUnload } from '../features/topAlbums/saga';

const rootReducer = combineReducers({
  [TOP_ALBUMS]: topAlbumsReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watchUnload()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
