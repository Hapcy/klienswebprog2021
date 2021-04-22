import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { exampleTracks } from '../domain/track';
import { deleteTrackFromPlaylists } from './action/playlistsActions';

export const TracksContext = React.createContext();

function useTracks() {
  const dispatch = useDispatch();

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
    dispatch(deleteTrackFromPlaylists(trackToDelete));
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
