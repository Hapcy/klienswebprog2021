import { selectTracks } from '../tracks/selector';

export function selectPlaylists(state) {
  return state.playlists;
}

export function selectPlaylistsWithTracks(state) {
  const playlists = selectPlaylists(state);
  const tracks = selectTracks(state);
  return playlists.map((playlist) => {
    const playlistTracks = playlist.tracks.map((trackId) =>
      tracks.find((track) => track.id === trackId),
    );
    return {
      ...playlist,
      tracks: playlistTracks,
    };
  });
}
