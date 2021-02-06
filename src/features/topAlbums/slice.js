import { createSlice, createSelector } from '@reduxjs/toolkit';

const name = 'TOP_ALBUMS';
const initialState = {
  isLoading: false,
  albumList: null,
  error: null,
  searchResult: null,
};
const reducers = {
  loadAlbums: state => {
    state.isLoading = true;
  },
  loadAlbumsSuccess: (state, { payload: result }) => {
    state.albumList = result;
    state.isLoading = false;
  },
  loadAlbumsFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
  reorderAlbums: (state, { payload: list }) => {
    state.albumList = list;
  },
};

export const topAlbumsSlice = createSlice({
  name,
  initialState,
  reducers,
});

const selectAllState = createSelector(
  state => state.isLoading,
  state => state.albumList,
  state => state.error,
  state => state.searchResult,
  (isLoading, albumList, error, searchResult) => {
    return { isLoading, albumList, error, searchResult };
  },
);

export const TOP_ALBUMS = topAlbumsSlice.name;
export const topAlbumsSelector = { all: state => selectAllState(state[TOP_ALBUMS]) };
export const topAlbumsReducer = topAlbumsSlice.reducer;
export const topAlbumsAction = topAlbumsSlice.actions;
