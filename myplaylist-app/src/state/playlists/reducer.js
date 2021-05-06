import {
  ADD_NEW_PLAYLIST,
  UPDATE_PLAYLIST,
  SET_PLAYLISTS,
} from '../playlists/actions';

const initialState = [];

export function playlistsReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case ADD_NEW_PLAYLIST: {
      newState = [...state, payload];
      break;
    }
    case UPDATE_PLAYLIST: {
      const updatedPlaylist = payload;
      newState = state.map((playlist) => {
        if (playlist.id === updatedPlaylist.id) {
          return updatedPlaylist;
        }
        return playlist;
      });
      break;
    }
    case SET_PLAYLISTS: {
      newState = payload;
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
}
