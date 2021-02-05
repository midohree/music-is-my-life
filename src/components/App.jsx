import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import TopAlbums from './TopAlbums';
import Album from './Album';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/topAlbum'>
          <TopAlbums />
        </Route>
        <Route exact path='/topAlbums/:album_id'>
          <Album />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
