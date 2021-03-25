import { PlaylistTypes } from '../../domain/playlist';
import classNames from 'classnames';
import { useState } from 'react';

export function PlaylistList({ playlists, chosenPlaylist, setChosenPlaylist }) {
  const [newPlaylistName, setNewPlaylistName] = useState('');

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
        <form className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <span className="header">New</span>
            <div className="description">
              {/* Create a new playlist */}
              {/* Controlled input */}
              <input
                type="text"
                required
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

PlaylistList.propTypes = {
  playlists: PlaylistTypes.PlaylistList.isRequired,
};
