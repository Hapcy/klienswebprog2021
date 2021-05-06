import './App.css';
import { Layout } from './views/layout/Layout';
import { PlaylistsPage } from './views/playlists/PlaylistsPage';
import { HomePage } from './views/home/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TracksPage } from './views/tracks/TracksPage';
import { useDispatch } from 'react-redux';

import './api/index';
import { useEffect } from 'react';
import { loadTracks } from './state/tracks/actions';
import { loadPlaylists } from './state/playlists/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTracks());
    dispatch(loadPlaylists());
  }, [dispatch]);
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/playlists">
          <PlaylistsPage></PlaylistsPage>
        </Route>
        <Route path="/tracks">
          <TracksPage></TracksPage>
        </Route>
        <Route>
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
