import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flexCenter } from './styles/layout';

import { topAlbumsSelector } from '../features/topAlbums/slice';

function AlbumDetails({ match }) {
  const history = useHistory();
  const [album, setAlbum] = useState({
    id: null,
    photoUrl: null,
    title: null,
    date: null,
    category: null,
    rights: null,
  });
  const { albumList } = useSelector(topAlbumsSelector.all);

  useEffect(() => {
    const id = match.params['album_id'];

    const targetAlbum = albumList.filter(album => {
      return album.id.attributes['im:id'] === id;
    });
    const data = targetAlbum[0];

    setAlbum({
      ...album,
      id: data.id.attributes['im:id'],
      photoUrl: data['im:image'][0].label,
      title: data.title.label,
      date: data['im:releaseDate'].attributes.label,
      category: data.category.attributes.term,
      rights: data.rights.label,
    });
  }, []);

  const handleClick = () => history.goBack();

  return (
    <Wrapper>
      <Content>
        <div>
          <img draggable={false} src={album.photoUrl} alt={album.title}/>
        </div>
        <div>
          <h6>{album.category}</h6>
          <h4>{album.title}</h4>
          <h6>{album.date}</h6>
          <h6>{album.rights}</h6>
        </div>
        <StyledButton onClick={() => handleClick()}>뒤로가기</StyledButton>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.shadow.default};
  height: 800px;
  width: 40%;
  overflow-y: auto;
  border: 1px solid ${({theme}) => theme.color.melonGreen};

  img {
    height: inherit;
    width: 200px;
    border-radius: 50%;
  }
`;

const StyledButton = styled.div`
  all: unset;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.color.melonGreen};
  color: white;
  font-weight: 500;
`;

export default AlbumDetails;

AlbumDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      album_id: PropTypes.string.isRequired,
    }),
  }),
};
