import PropTypes from 'prop-types';

const Track = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  length: PropTypes.string, // számként?
  thumbnailURL: PropTypes.string,
  spotifyURL: PropTypes.string,
  lyricsURL: PropTypes.string,
  chordsURL: PropTypes.string,
});

const TrackList = PropTypes.arrayOf(Track);

export const TrackTypes = {
  Track,
  TrackList,
};

export const exampleTracks = [
  {
    id: 1,
    artist: 'Bon Jovi',
    title: "It's my life",
    length: '3:44',
    thumbnailURL: 'assets/bonjovi.jpg',
    spotifyURL: 'https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l',
    chordsURL:
      'https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538',
    lyricsURL: 'https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html',
  },
  {
    id: 2,
    artist: 'Bon Jovi',
    title: "Livin' on a prayer",
    length: '4:11',
  },
  {
    id: 3,
    artist: 'AC/DC',
    title: 'Thunderstruck',
    length: '4:52',
  },
  {
    id: 4,
    artist: 'AC/DC',
    title: 'Back in black',
    length: '4:14',
  },
  {
    id: 5,
    artist: 'AC/DC',
    title: 'Highway to hell',
    length: '3:29',
  },
  {
    id: 6,
    artist: 'John Denver',
    title: 'Take me home, country roads',
    length: '3:17',
  },
];
