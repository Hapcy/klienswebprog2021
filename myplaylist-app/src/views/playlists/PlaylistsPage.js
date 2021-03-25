import { useState } from 'react';
import { examplePlaylists } from '../../domain/playlist';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

export function PlaylistsPage() {
  const playlists = examplePlaylists;
  const [chosenPlaylist, setChosenPlaylist] = useState(null);
  const [chosenTrack, setChosenTrack] = useState(null);

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <PlaylistList
            playlists={playlists}
            chosenPlaylist={chosenPlaylist}
            setChosenPlaylist={(playlist) => {
              setChosenPlaylist(playlist);
              setChosenTrack(null);
            }}
          ></PlaylistList>
        </div>
        <div className="ui ten wide column">
          {chosenPlaylist ? (
            <TrackList
              playlist={chosenPlaylist}
              chosenTrack={chosenTrack}
              setChosenTrack={setChosenTrack}
            ></TrackList>
          ) : null}
        </div>
      </div>
      <div className="ui divider"></div>
      {chosenTrack ? <TrackDetails track={chosenTrack}></TrackDetails> : null}
    </div>
  );
}
