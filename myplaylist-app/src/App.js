import './App.css';
import { Layout } from './views/layout/Layout';
import { PlaylistsPage } from './views/playlists/PlaylistsPage';

function App() {
  return (
    <Layout>
      <PlaylistsPage></PlaylistsPage>
    </Layout>
  );
}

export default App;
