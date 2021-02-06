import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { flexCenter } from './styles/layout';
import { GlobalStyle } from './styles/GlobalStyle';

import Home from './Home';
import TopAlbums from './TopAlbums';
import AlbumDetails from './AlbumDetails';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/topAlbums' component={TopAlbums} />
          <Route exact path='/topAlbums/:album_id' component={AlbumDetails} />
          <Redirect to='/' />
        </Switch>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
`;

export default App;
