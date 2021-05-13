// import { examplePlaylists } from '../domain/playlist';
// import { exampleTracks } from '../domain/track';
// import { PlaylistsAppStorage } from './nedb';
import { MyPlaylistAppRestApi } from './rest';

export const tracksStorage = new MyPlaylistAppRestApi('tracks');
// tracksStorage.fill(exampleTracks);
export const playlistsStorage = new MyPlaylistAppRestApi('playlists');
// playlistsStorage.fill(examplePlaylists);
