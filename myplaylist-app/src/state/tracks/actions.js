import { tracksStorage } from '../../api/index';
import { removeTrackFromPlaylists } from '../playlists/actions';
import { selectTracks } from './selector';

export const ADD_OR_UPDATE_TRACK = 'ADD_OR_UPDATE_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';
export const SET_TRACKS = 'SET_TRACKS';
export const SET_TRACKS_FETCHING = 'SET_TRACKS_FETCHING';

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

export function setTracksFetching(fetching) {
  return {
    type: SET_TRACKS_FETCHING,
    payload: fetching,
  };
}

export function loadTracks() {
  return async (dispatch) => {
    dispatch(setTracksFetching(true));
    const tracks = await tracksStorage.getAll();
    dispatch(setTracks(tracks));
    dispatch(setTracksFetching(false));
  };
}

export function addOrUpdateTrack(track) {
  return async (dispatch, getState) => {
    let updatedTrack = track;
    const tracks = selectTracks(getState());
    dispatch(setTracksFetching(true));
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
    dispatch(setTracksFetching(false));
  };
}

export function deleteTrack(trackToDelete) {
  return async (dispatch, getState) => {
    dispatch(setTracksFetching(true));
    // lehetne úgy is, hogy
    // await dispatch(removeTrackFromPlaylists(trackToDelete))
    await removeTrackFromPlaylists(trackToDelete)(dispatch, getState);

    await tracksStorage.delete(trackToDelete);

    dispatch(deleteTrackFromStore(trackToDelete));
    dispatch(setTracksFetching(false));
  };
}
