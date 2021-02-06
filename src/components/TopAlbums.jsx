import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  topAlbumsAction,
  topAlbumsSelector,
} from '../features/topAlbums/slice';
import ErrorPage from './ErrorPage';
import Loading from './Loading';

function TopAlbums() {
  const dispatch = useDispatch();
  const { isLoading, albumList, error } = useSelector(topAlbumsSelector.all);

  useEffect(() => {
    const { loadAlbums } = topAlbumsAction;

    dispatch(loadAlbums());
  }, []);

  return (
    <div>
      {error && <ErrorPage />}
      {isLoading ?
        <Loading />
      :
        <ul>
          {albumList && albumList.map(album => {
            const id = album.id.attributes['im:id'];

            return <li key={id}>{album['im:artist'].label}</li>;
          })}
        </ul>
      }
    </div>
  );
}

export default TopAlbums;
