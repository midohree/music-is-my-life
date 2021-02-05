import { call, put, takeLatest } from 'redux-saga/effects';
import { loadTopAlbums } from '../../api';
import { topAlbumsAction } from './slice';

function* handleTopAlbums() {
  const { loadAlbumsSuccess, loadAlbumsFail } = topAlbumsAction;

  try {
    const albumList = yield call(loadTopAlbums);

    yield put(loadAlbumsSuccess(albumList));
  } catch (err) {
    yield put(loadAlbumsFail(err));
  }
}

export function* watchUnload() {
  const { loadAlbums } = topAlbumsAction;

  yield takeLatest(loadAlbums, handleTopAlbums);
}
