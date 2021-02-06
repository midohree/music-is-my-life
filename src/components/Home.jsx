import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from './styles/layout';

function Home() {
  const history = useHistory();
  const movePage = path => history.push(path);

  return (
    <Wrapper>
      <TitleContainer>
        <h1>Music is my life</h1>
        <h3>최근 인기있는 top100 음악을 만나보세요!</h3>
      </TitleContainer>
      <Button onClick={() => movePage('/topAlbums')}>Top100 보러가기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}

  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-bottom: 80px;

  h1 {
    font-family: 'Staatliches';
    font-size: 60px;
    color: ${({theme}) => theme.color.melonGreen};
    margin-bottom: 10px;
  }
`;

const Button = styled.div`
  all: unset;
  cursor: pointer;
  box-shadow: ${({theme}) => theme.shadow.default};
  padding: 20px;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    transform: translate(0, -0.5rem);
  }
`;

export default Home;
