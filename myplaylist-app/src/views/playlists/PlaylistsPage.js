import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

export function PlaylistsPage() {
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <PlaylistList></PlaylistList>
        </div>
        <div className="ui ten wide column">
          <TrackList></TrackList>
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails></TrackDetails>
    </div>
  );
}
