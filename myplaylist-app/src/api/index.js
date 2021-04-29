// import { examplePlaylists } from '../domain/playlist';
// import { exampleTracks } from '../domain/track';
import { PlaylistsAppStorage } from './nedb';

export const tracksStorage = new PlaylistsAppStorage('tracks');
// tracksStorage.fill(exampleTracks);
export const playlistsStorage = new PlaylistsAppStorage('playlists');
// playlistsStorage.fill(examplePlaylists);
