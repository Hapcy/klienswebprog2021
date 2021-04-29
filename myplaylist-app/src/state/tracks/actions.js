export const ADD_OR_UPDATE_TRACK = 'ADD_OR_UPDATE_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';
export const SET_TRACKS = 'SET_TRACKS';

export function addOrUpdateTrack(track) {
  return {
    type: ADD_OR_UPDATE_TRACK,
    payload: track,
  };
}

export function deleteTrack(trackToDelete) {
  return {
    type: DELETE_TRACK,
    payload: trackToDelete,
  }
}

export function setTracks(tracks) {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
}
