import { createSlice, createSelector } from '@reduxjs/toolkit';

const name = 'TOP_ALBUMS';
const initialState = {
  isLoading: false,
  albumList: null,
  error: null,
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
  (isLoading, albumList, error) => {
    return { isLoading, albumList, error };
  },
);

export const TOP_ALBUMS = topAlbumsSlice.name;
export const topAlbumsSelector = { all: state => selectAllState(state[TOP_ALBUMS]) };
export const topAlbumsReducer = topAlbumsSlice.reducer;
export const topAlbumsAction = topAlbumsSlice.actions;
