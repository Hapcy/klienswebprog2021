import { playlistsStorage } from '../../api/index';
import { selectPlaylists } from './selector';

export const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
export const UPDATE_PLAYLIST = 'UPDATE_PLAYLIST';
export const SET_PLAYLISTS = 'SET_PLAYLISTS';

function addNewPlaylistToStore(playlist) {
  return {
    type: ADD_NEW_PLAYLIST,
    payload: playlist,
  };
}

function updatePlaylist(playlist) {
  return {
    type: UPDATE_PLAYLIST,
    payload: playlist,
  };
}

export function setPlaylists(playlists) {
  return {
    type: SET_PLAYLISTS,
    payload: playlists,
  };
}

export function loadPlaylists() {
  return async (dispatch) => {
    const playlists = await playlistsStorage.getAll();
    dispatch(setPlaylists(playlists));
  };
}

export function addNewPlaylist(playlistTitle) {
  return async (dispatch, getState) => {
    const state = selectPlaylists(getState());
    const maxId = state.reduce((max, { id }) => Math.max(max, id), 0) + 1;
    const newPlaylist = {
      id: maxId.toString(),
      title: playlistTitle,
      tracks: [],
    };
    await playlistsStorage.add(newPlaylist);
    dispatch(addNewPlaylistToStore(newPlaylist));
  };
}

export function addTrackToPlaylist(playlist, chosenTrack) {
  return async (dispatch) => {
    // get chosen playlist
    // update immutably playlist.tracks
    const updatedPlaylist = {
      ...playlist,
      tracks: [...playlist.tracks, chosenTrack.id],
    };
    // persist new playlist
    await playlistsStorage.modify(updatedPlaylist);
    // update playlist in store
    dispatch(updatePlaylist(updatedPlaylist));
  };
}

export function removeTrackFromPlaylists(trackToDelete) {
  return async (dispatch, getState) => {
    const playlists = selectPlaylists(getState());
    const updatedPlaylists = playlists.map((playlist) => ({
      ...playlist,
      tracks: playlist.tracks.filter((trackId) => trackId !== trackToDelete.id),
    }));
    for (const playlist of updatedPlaylists) {
      await playlistsStorage.modify(playlist);
    }
    dispatch(setPlaylists(updatedPlaylists));
  };
}
