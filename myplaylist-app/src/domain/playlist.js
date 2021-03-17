import PropTypes from 'prop-types';
import { TrackList, exampleTracks } from './track';

export const Playlist = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tracks: TrackList,
});

export const PlaylistList = PropTypes.arrayOf(Playlist);

export const examplePlaylists = [
  {
    id: 1,
    title: 'Heavy Metal',
    tracks: exampleTracks.slice(0, 4),
  },
  {
    id: 2,
    title: 'Classics',
    tracks: exampleTracks.slice(0, 3),
  },
  {
    id: 3,
    title: 'Movie Soundtracks',
    tracks: exampleTracks.slice(2, 3),
  },
];
