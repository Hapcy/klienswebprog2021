import PropTypes from 'prop-types';
import { TrackTypes } from './track';

const Playlist = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tracks: TrackTypes.TrackList.isRequired,
});

const PlaylistList = PropTypes.arrayOf(Playlist);

export const PlaylistTypes = {
  PlaylistList,
  Playlist,
};

export const examplePlaylists = [
  {
    id: '1',
    title: 'Heavy Metal',
    tracks: ['1', '2', '3', '4'],
  },
  {
    id: '2',
    title: 'Classics',
    tracks: ['1', '2', '3'],
  },
  {
    id: '3',
    title: 'Movie Soundtracks',
    tracks: ['3', '4', '5'],
  },
];
