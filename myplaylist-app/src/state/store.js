import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { playlistsReducer } from './reducer/playlistsReducer';

export const store = createStore(
  combineReducers({
    playlists: playlistsReducer,
  }),
  devToolsEnhancer(),
);
