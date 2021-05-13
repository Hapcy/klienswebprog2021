// import { examplePlaylists } from '../domain/playlist';
// import { exampleTracks } from '../domain/track';
// import { PlaylistsAppStorage } from './nedb';
import { MyPlaylistAppRestApi } from './rest';
import { MyPlaylistAppChannel } from './socket';

export const tracksStorage = new MyPlaylistAppRestApi('tracks');
// tracksStorage.fill(exampleTracks);
export const playlistsStorage = new MyPlaylistAppRestApi('playlists');
// playlistsStorage.fill(examplePlaylists);

export const messageChannel = new MyPlaylistAppChannel('messages');

