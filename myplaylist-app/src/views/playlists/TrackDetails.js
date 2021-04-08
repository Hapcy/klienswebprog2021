import { TrackTypes } from '../../domain/track';

export function TrackDetails({ track }) {
  let image;
  if (track.thumbnailURL) {
    image = (
      <div className="image">
        <img alt="" src={track.thumbnailURL} />
      </div>
    );
  }
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          {image}
          <div className="content">
            <span className="header">{track.title}</span>
            <div className="meta">
              <span>{track.artist}</span>
              <span>{track.length}</span>
            </div>
            <div className="extra">
              {track.spotifyURL ? (
                <a
                  href={track.spotifyURL}
                  className="ui button tiny green button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="spotify icon"></i>
                  Listen on Spotify
                </a>
              ) : null}
              {track.lyricsURL && (
                <a
                  href={track.lyricsURL}
                  className="ui button tiny teal button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="microphone icon"></i>
                  Show lyrics
                </a>
              )}
              {track.chordsURL ? (
                <a
                  href={track.chordsURL}
                  className="ui button tiny orange button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="guitar icon"></i>
                  Show chords
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TrackDetails.propTypes = {
  track: TrackTypes.Track,
};
