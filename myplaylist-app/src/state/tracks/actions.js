import { tracksStorage } from '../../api/index';
import { removeTrackFromPlaylists } from '../playlists/actions';
import { selectTracks } from './selector';

export const ADD_OR_UPDATE_TRACK = 'ADD_OR_UPDATE_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';
export const SET_TRACKS = 'SET_TRACKS';

function addOrUpdateTrackToStore(track) {
  return {
    type: ADD_OR_UPDATE_TRACK,
    payload: track,
  };
}

function deleteTrackFromStore(trackToDelete) {
  return {
    type: DELETE_TRACK,
    payload: trackToDelete,
  };
}

export function setTracks(tracks) {
  return {
    type: SET_TRACKS,
    payload: tracks,
  };
}

export function loadTracks() {
  return async (dispatch) => {
    const tracks = await tracksStorage.getAll();
    dispatch(setTracks(tracks));
  };
}

export function addOrUpdateTrack(track) {
  return async (dispatch, getState) => {
    let updatedTrack = track;
    const tracks = selectTracks(getState());
    if (track.id) {
      for (const currentTrack of tracks) {
        if (track.id === currentTrack.id) {
          await tracksStorage.modify(track);
        }
      }
    } else {
      const maxId = tracks.reduce((max, { id }) => Math.max(max, id), 0) + 1;
      updatedTrack = {
        ...track,
        id: maxId.toString(),
      };
      await tracksStorage.add(updatedTrack);
    }
    dispatch(addOrUpdateTrackToStore(updatedTrack));
  };
}

export function deleteTrack(trackToDelete) {
  return async (dispatch, getState) => {
    // lehetne úgy is, hogy
    // await dispatch(removeTrackFromPlaylists(trackToDelete))
    await removeTrackFromPlaylists(trackToDelete)(dispatch, getState);

    await tracksStorage.delete(trackToDelete);

    dispatch(deleteTrackFromStore(trackToDelete));
  };
}
