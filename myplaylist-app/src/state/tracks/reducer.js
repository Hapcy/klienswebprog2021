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
  if (track.id) {
    return tracks.map((currentTrack) => {
      if (currentTrack.id === track.id) {
        return track;
      } else {
        return currentTrack;
      }
    });
  } else {
    const maxId = tracks.reduce((max, { id }) => Math.max(max, id), 0) + 1;
    return [...tracks, { ...track, id: maxId }];
  }
}

function deleteTrack(tracks, trackToDelete) {
  return tracks.filter((track) => track !== trackToDelete);
}
