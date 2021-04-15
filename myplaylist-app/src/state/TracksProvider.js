import React, { useContext, useRef, useState } from 'react';
import { exampleTracks } from '../domain/track';
import { PlaylistsContext } from './PlaylistsProvider';

export const TracksContext = React.createContext();

function useTracks() {
  const { deleteTrackFromPlaylists } = useContext(PlaylistsContext);

  const [tracks, setTracks] = useState(exampleTracks);
  const maxId = useRef(
    tracks.reduce((max, { id }) => Math.max(max, id), 0) + 1,
  );

  const addOrUpdateTrack = (track) => {
    if (track.id) {
      setTracks(
        tracks.map((currentTrack) => {
          if (currentTrack.id === track.id) {
            return track;
          } else {
            return currentTrack;
          }
        }),
      );
    } else {
      setTracks([...tracks, { ...track, id: maxId.current }]);
      maxId.current += 1;
    }
  };

  const deleteTrack = (trackToDelete) => {
    setTracks(tracks.filter((track) => track !== trackToDelete));
    deleteTrackFromPlaylists(trackToDelete);
  };

  return {
    tracks,
    addOrUpdateTrack,
    deleteTrack,
  };
}

export function TracksProvider({ children }) {
  const tracksContextValue = useTracks();
  return (
    <TracksContext.Provider value={tracksContextValue}>
      {children}
    </TracksContext.Provider>
  );
}
