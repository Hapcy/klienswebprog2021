import { ADD_OR_UPDATE_TRACK, DELETE_TRACK, SET_TRACKS, SET_TRACKS_FETCHING } from './actions';

const initialState = {
  items: [],
  fetching: false,
};

export function tracksReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case ADD_OR_UPDATE_TRACK: {
      newState = {
        ...state,
        items: addOrUpdateTrack(state.items, payload),
      };
      break;
    }
    case DELETE_TRACK: {
      newState = {
        ...state,
        items: deleteTrack(state.items, payload),
      };
      break;
    }
    case SET_TRACKS: {
      newState = {
        ...state,
        items: payload,
      };
      break;
    }
    case SET_TRACKS_FETCHING: {
      newState = {
        ...state,
        fetching: payload,
      }
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
}

function addOrUpdateTrack(tracks, track) {
  let trackUpdated = false;
  const updatedTracks = tracks.map((currentTrack) => {
    if (currentTrack.id === track.id) {
      trackUpdated = true;
      return track;
    } else {
      return currentTrack;
    }
  });
  if (!trackUpdated) {
    // Itt most szabad mutable módon módosítani, mert csak egy átmeneti érték az updatedTracks
    updatedTracks.push(track);
  }
  return updatedTracks;
}

function deleteTrack(tracks, trackToDelete) {
  return tracks.filter((track) => track !== trackToDelete);
}
