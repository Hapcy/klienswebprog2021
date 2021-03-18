import { PlaylistTypes } from '../../domain/playlist';

export function TrackList({ playlist }) {
  const tracks = playlist.tracks.map((track) => (
    <div key={track.id} className="item">
      <i className="large music middle aligned icon"></i>
      <div className="content">
        <a className="header">{track.title}</a>
        <div className="description">{track.artist}</div>
      </div>
    </div>
  ));
  return (
    <>
      <h3>{playlist.title}</h3>
      <div className="ui very relaxed selection list">{tracks}</div>
    </>
  );
}

TrackList.propTypes = {
  playlist: PlaylistTypes.Playlist.isRequired,
};
