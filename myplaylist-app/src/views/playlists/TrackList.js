import { PlaylistTypes } from '../../domain/playlist';
import classNames from 'classnames';

export function TrackList({ playlist, chosenTrack, setChosenTrack }) {
  const tracks = playlist.tracks.map((track) => (
    <div
      key={track.id}
      className={classNames({
        item: true,
        active: chosenTrack === track,
      })}
      onClick={() => setChosenTrack(track)}
    >
      <i className="large music middle aligned icon"></i>
      <div className="content">
        <span className="header">{track.title}</span>
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
