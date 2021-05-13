import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { setupMessageReceiver } from './messages/actions';
import { playlistsReducer } from './playlists/reducer';
import { tracksReducer } from './tracks/reducer';
import { userReducer } from './user/reducer';

export const store = createStore(
  combineReducers({
    playlists: playlistsReducer,
    tracks: tracksReducer,
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
store.dispatch(setupMessageReceiver());
