import { PlaylistTypes } from '../../domain/playlist';
import classNames from 'classnames';
// import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewPlaylist } from '../../state/action/playlistsActions';

export function PlaylistList({ chosenPlaylist, setChosenPlaylist }) {
  const playlists = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  // Controlled input state
  // const [newPlaylistName, setNewPlaylistName] = useState('');
  // console.log(newPlaylistName);

  const inputRef = useRef(null);

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addNewPlaylist(inputRef.current.value));
            inputRef.current.value = '';
          }}
          className="item"
          id="newPlaylist"
        >
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <span className="header">New</span>
            <div className="description">
              {/* Create a new playlist */}
              {/* Controlled input */}
              {/* <input
                type="text"
                required
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              /> */}
              {/* Uncontrolled input */}
              <input
                name="newPlaylistName"
                type="text"
                required
                ref={inputRef}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
