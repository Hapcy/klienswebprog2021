import './App.css';
import { Layout } from './views/layout/Layout';
import { PlaylistsPage } from './views/playlists/PlaylistsPage';
import { HomePage } from './views/home/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TracksPage } from './views/tracks/TracksPage';

import './api/index';
import { PrivateRoute } from './views/PrivateRoute';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <PrivateRoute path="/playlists">
          <PlaylistsPage></PlaylistsPage>
        </PrivateRoute>
        <PrivateRoute path="/tracks">
          <TracksPage></TracksPage>
        </PrivateRoute>
        <Route>
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
