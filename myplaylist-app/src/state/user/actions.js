import { login as executeLogin } from '../../api/rest';
import { loadPlaylists } from '../playlists/actions';
import { loadTracks } from '../tracks/actions';

export const SET_USER = 'SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function login(username, password) {
  return async (dispatch) => {
    const { user } = await executeLogin(username, password);
    dispatch(setUser(user));
    dispatch(loadPlaylists());
    dispatch(loadTracks());
  };
}
