import { examplePlaylists } from '../../domain/playlist';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

export function PlaylistsPage() {

  const playlists = examplePlaylists;
  const chosenPlaylist = examplePlaylists[0];
  const chosenTrack = examplePlaylists[0].tracks[0];

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <PlaylistList playlists={playlists}></PlaylistList>
        </div>
        <div className="ui ten wide column">
          <TrackList playlist={chosenPlaylist}></TrackList>
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails track={chosenTrack}></TrackDetails>
    </div>
  );
}
