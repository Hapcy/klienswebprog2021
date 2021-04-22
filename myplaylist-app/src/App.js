import './App.css';
import { Layout } from './views/layout/Layout';
import { PlaylistsPage } from './views/playlists/PlaylistsPage';
import { HomePage } from './views/home/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { TracksPage } from './views/tracks/TracksPage';
import { PlaylistsProvider } from './state/PlaylistsProvider';
import { TracksProvider } from './state/TracksProvider';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PlaylistsProvider>
          <TracksProvider>
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
          </TracksProvider>
        </PlaylistsProvider>
      </Provider>
    </Router>
  );
}

export default App;
