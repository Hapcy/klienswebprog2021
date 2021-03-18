import { PlaylistTypes } from "../../domain/playlist";

export function PlaylistList({ playlists }) {
  const playlistItems = playlists.map((playlist) => (
    <div key={playlist.id} className="item">
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <a className="header">{playlist.title}</a>
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
