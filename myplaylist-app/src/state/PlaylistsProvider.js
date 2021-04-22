import React, { useRef, useState } from 'react';
import { examplePlaylists } from '../domain/playlist';

export const PlaylistsContext = React.createContext();

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

  const addTrackToPlaylist = (chosenPlaylist, chosenTrack) => {
    setPlaylists(
      playlists.map((playlist) => {
        if (chosenPlaylist === playlist) {
          const trackAlreadyAdded = playlist.tracks.some(
            (trackId) => trackId === chosenTrack.id,
          );
          if (!trackAlreadyAdded) {
            return {
              ...playlist,
              tracks: [...playlist.tracks, chosenTrack.id],
            };
          }
        }
        return playlist;
      }),
    );
  };

  const deleteTrackFromPlaylists = (trackToDelete) => {
    setPlaylists(
      playlists.map((playlist) => ({
        ...playlist,
        tracks: playlist.tracks.filter(
          (trackId) => trackId !== trackToDelete.id,
        ),
      })),
    );
  };

  return {
    playlists,
    addNewPlaylist,
    addTrackToPlaylist,
    deleteTrackFromPlaylists,
  };
}

export function PlaylistsProvider({ children }) {
  const playlistsContextValue = usePlaylists();
  return (
    <PlaylistsContext.Provider value={playlistsContextValue}>
      {children}
    </PlaylistsContext.Provider>
  );
}
