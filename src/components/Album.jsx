import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { fadeIn } from './styles/keyframes';

function Album({
  id,
  title,
  photoUrl,
  date,
  search,
}) {
  return (
    <StyledLink to={`/topAlbums/${id}`} >
    <Content key={id}>
        <img draggable={false} src={photoUrl} alt={title}/>
        <div>
          <h6>{date}</h6>
          <h4>{title}</h4>
        </div>
    </Content>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Content = styled.div`
  animation: 1s ${fadeIn} ease-in-out;
  transition: transform 0.5s;
  background-color: white;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: ${({theme}) => theme.shadow.default};

  &:hover {
    transform: scale(1.04) translateY(-10px);
  }

  img {
    height: inherit;
  }

  h6 {
    margin: 10px;
    color: ${({theme}) => theme.color.lightGray}
  }

  h4 {
    margin: 10px;
    color: black;
  }
`;

export default Album;

Album.propTypes = {
  id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};
