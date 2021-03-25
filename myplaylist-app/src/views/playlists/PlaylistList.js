import { PlaylistTypes } from '../../domain/playlist';
import classNames from 'classnames';

export function PlaylistList({ playlists, chosenPlaylist, setChosenPlaylist }) {

  const playlistItems = playlists.map((playlist) => (
    <div
      key={playlist.id}
      className={classNames({
        item: true,
        active: playlist === chosenPlaylist,
      })}
      onClick={() => setChosenPlaylist(playlist)}
    >
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <span className="header">{playlist.title}</span>
        <div className="description">{playlist.tracks.length} songs</div>
      </div>
    </div>
  ));
  return (
    <>
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {playlistItems}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </>
  );
}

PlaylistList.propTypes = {
  playlists: PlaylistTypes.PlaylistList.isRequired,
};
