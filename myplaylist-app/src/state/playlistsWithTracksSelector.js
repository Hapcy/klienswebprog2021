import { useContext } from 'react';
import { PlaylistsContext } from './PlaylistsProvider';
import { TracksContext } from './TracksProvider';

export function usePlaylistsWithTracks() {
  const { playlists, ...playlistsContext } = useContext(PlaylistsContext);
  const { tracks } = useContext(TracksContext);

  return {
    playlists: playlists.map((playlist) => {
      const playlistTracks = tracks.filter((track) =>
        playlist.tracks.includes(track.id),
      );
      return {
        ...playlist,
        tracks: playlistTracks,
      };
    }),
    ...playlistsContext,
  };
}
