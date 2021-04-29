import { examplePlaylists } from '../../domain/playlist';
import {
  ADD_NEW_PLAYLIST,
  ADD_TRACK_TO_PLAYLIST,
} from '../playlists/actions';
import {
  DELETE_TRACK
} from '../tracks/actions';

const initialState = examplePlaylists;

export function playlistsReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case ADD_NEW_PLAYLIST: {
      const maxId = state.reduce((max, { id }) => Math.max(max, id), 0) + 1;
      newState = [
        ...state,
        {
          id: maxId,
          title: payload,
          tracks: [],
        },
      ];
      break;
    }
    case ADD_TRACK_TO_PLAYLIST: {
      const { chosenPlaylist, chosenTrack } = payload;
      newState = state.map((playlist) => {
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
      });
      break;
    }
    case DELETE_TRACK: {
      const trackToDelete = payload;
      newState = state.map((playlist) => ({
        ...playlist,
        tracks: playlist.tracks.filter(
          (trackId) => trackId !== trackToDelete.id,
        ),
      }));
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
}
