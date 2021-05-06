import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { playlistsReducer } from './playlists/reducer';
import { tracksReducer } from './tracks/reducer';

export const store = createStore(
  combineReducers({
    playlists: playlistsReducer,
    tracks: tracksReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
