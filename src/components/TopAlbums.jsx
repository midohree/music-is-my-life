import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import { flexCenter } from './styles/layout';

import { topAlbumsAction, topAlbumsSelector } from '../features/topAlbums/slice';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Album from './Album';
import SearchInput from './SearchInput';
import Radio from './Radio';


function TopAlbums() {
  const dispatch = useDispatch();
  const { isLoading, albumList, error } = useSelector(topAlbumsSelector.all);
  const { reorderAlbums, loadAlbums } = topAlbumsAction;

  const [sortType, setSortType] = useState('');
  const [value, setValue] = useState('');
  const [searchAlbum, setSearchAlbum] = useState({});

  useEffect(() => {
    dispatch(loadAlbums());
  }, []);

  useEffect(() => {
    if(sortType) {
      switch (sortType) {
        case 'ascRelease': {
          let sortedList = _.orderBy(albumList, ['date'], ['asc']);

          dispatch(reorderAlbums(sortedList));
          break;
        }
        case 'descRelease': {
          let sortedList = _.orderBy(albumList, ['date'], ['desc']);

          dispatch(reorderAlbums(sortedList));
          break;
        }
        case 'ascName': {
          let sortedList = _.orderBy(albumList, ['artist'], ['asc']);

          dispatch(reorderAlbums(sortedList));
          break;
        }
        case 'descName': {
          let sortedList = _.orderBy(albumList, ['artist'], ['desc']);

          dispatch(reorderAlbums(sortedList));
          break;
        }
        default:
          console.log('default');
      }
    }
  }, [sortType]);

  const handleOnChange = useCallback(e => {
    const { value } = e.target;

    setSortType(value);
  }, []);

  const handleInputChange = e => {
    const { value } = e.target;

    setValue(value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (value.length <= 2) alert('검색은 2글자 이상으로 입력해주세요.');

    const searched = albumList.filter(album => {
      return album.title.includes(value);
    });

    setSearchAlbum({
      id: searched[0].id,
      title: searched[0].title,
      photoUrl: searched[0].photoUrl,
      date: searched[0].formDate,
    });
  };

  return (
    <Wrapper>
      {error && <ErrorPage />}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Radio onChange={handleOnChange} />
          <ListHeader>
            <h1>Top 100</h1>
            <SearchInput
              value={value}
              onChange={handleInputChange}
              onSubmit={handleOnSubmit}
            />
          </ListHeader>
          <AlbumListContainer>
            {searchAlbum && <Album search={true} id={searchAlbum.id} title={searchAlbum.title} photoUrl={searchAlbum.photoUrl} date={searchAlbum.date} />}
            {albumList && albumList.map(album => {
                const { id, title, photoUrl, formatDate } = album;
                return (
                  <Album
                    key={id}
                    id={id}
                    title={title}
                    photoUrl={photoUrl}
                    date={formatDate}
                    search={false}
                  />
                );
              })
            }
          </AlbumListContainer>
        </>
      )}
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
