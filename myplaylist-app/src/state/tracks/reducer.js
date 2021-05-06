import { ADD_OR_UPDATE_TRACK, DELETE_TRACK, SET_TRACKS } from './actions';

const initialState = [];

export function tracksReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case ADD_OR_UPDATE_TRACK: {
      newState = addOrUpdateTrack(state, payload);
      break;
    }
    case DELETE_TRACK: {
      newState = deleteTrack(state, payload);
      break;
    }
    case SET_TRACKS: {
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
