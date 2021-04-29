import './App.css';
import { Layout } from './views/layout/Layout';
import { PlaylistsPage } from './views/playlists/PlaylistsPage';
import { HomePage } from './views/home/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TracksPage } from './views/tracks/TracksPage';
import { useDispatch } from 'react-redux';

import './api/index';
import { useEffect } from 'react';
import { playlistsStorage, tracksStorage } from './api/index';
import { setTracks } from './state/tracks/actions';
import { setPlaylists } from './state/playlists/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const readData = async () => {
      const tracks = await tracksStorage.getAll();
      dispatch(setTracks(tracks));
      const playlists = await playlistsStorage.getAll();
      dispatch(setPlaylists(playlists));
    };
    readData();
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
