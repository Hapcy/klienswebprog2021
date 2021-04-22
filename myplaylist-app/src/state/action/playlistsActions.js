export const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
export const ADD_TRACK_TO_PLAYLIST = 'ADD_TRACK_TO_PLAYLIST';
export const DELETE_TRACK_FROM_PLAYLISTS = 'DELETE_TRACK_FROM_PLAYLISTS';

export function addNewPlaylist(playlistTitle) {
  return {
    type: ADD_NEW_PLAYLIST,
    payload: playlistTitle,
  };
}

export function addTrackToPlaylist(chosenPlaylist, chosenTrack) {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    payload: {
      chosenPlaylist,
      chosenTrack,
    },
  };
}

export function deleteTrackFromPlaylists(trackToDelete) {
  return {
    type: DELETE_TRACK_FROM_PLAYLISTS,
    payload: trackToDelete,
  };
}
