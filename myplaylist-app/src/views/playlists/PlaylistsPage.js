import { useState, useRef } from 'react';
import { examplePlaylists } from '../../domain/playlist';
import { PlaylistList } from './PlaylistList';
import { TrackDetails } from './TrackDetails';
import { TrackList } from './TrackList';

function usePlaylists() {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const maxId = useRef(
    playlists.reduce((max, { id }) => Math.max(max, id), 0) + 1,
  );
  const addNewPlaylist = (playlistName) => {
    setPlaylists([
      ...playlists,
      {
        id: maxId.current,
        title: playlistName,
        tracks: [],
      },
    ]);
    maxId.current += 1;
  };

  return {
    playlists,
    addNewPlaylist,
  };
}

export function PlaylistsPage() {
  const { playlists, addNewPlaylist } = usePlaylists();

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
            addNewPlaylist={addNewPlaylist}
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
