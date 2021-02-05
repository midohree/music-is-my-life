import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { flexCenter } from './styles/layout';

import { topAlbumsAction, topAlbumsSelector } from '../features/topAlbums/slice';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Album from './Album';
import SearchInput from './SearchInput';

function TopAlbums() {
  const dispatch = useDispatch();
  const { isLoading, albumList, error } = useSelector(topAlbumsSelector.all);

  useEffect(() => {
    const { loadAlbums } = topAlbumsAction;

    dispatch(loadAlbums());
  }, []);

  return (
    <Wrapper>
      {error && <ErrorPage />}
      {isLoading ?
        <Loading />
      : <>
          <ListHeader>
            <h1>Top 100</h1>
            <SearchInput />
          </ListHeader>
          <AlbumListContainer>
            {albumList && albumList.map(album => {
              const id = album.id.attributes['im:id'];
              const title = album.title.label;
              const photoUrl = album['im:image'][0].label;
              const date = album['im:releaseDate'].attributes.label;

              return (
                <Album key={id} id={id} title={title} photoUrl={photoUrl} date={date} />
              );
            })}
          </AlbumListContainer>
        </>
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  width: 60%;
  height: 100%;
  flex-direction: column;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

const AlbumListContainer = styled.div`
  height: 800px;
  overflow-y: auto;
`;

export default TopAlbums;
