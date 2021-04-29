import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { playlistsReducer } from './playlists/reducer';
import { tracksReducer } from './tracks/reducer';

export const store = createStore(
  combineReducers({
    playlists: playlistsReducer,
    tracks: tracksReducer,
  }),
  devToolsEnhancer(),
);
