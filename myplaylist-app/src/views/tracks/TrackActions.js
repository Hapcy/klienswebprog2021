import { useState, useEffect, useRef, useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { PlaylistsContext } from '../../state/PlaylistsProvider';
import { TracksContext } from '../../state/TracksProvider';

export function useTextFilter(defaultFilter, items, filterFn) {
  const [filter, setFilter] = useState(defaultFilter);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredItems = items.filter((item) => filterFn(item, filter));
  return { filter, handleFilterChange, filteredItems };
}

export function TrackActions({ editTrack, track }) {
  const { playlists, addTrackToPlaylist } = useContext(PlaylistsContext);
  const { deleteTrack } = useContext(TracksContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (dropdownOpen) {
      searchInputRef.current.focus();
    }
  }, [dropdownOpen]);

  const {
    filter,
    handleFilterChange,
    filteredItems: filteredPlaylists,
  } = useTextFilter('', playlists, (playlist, filter) =>
    playlist.title.includes(filter),
  );
  const playlistItems = filteredPlaylists.map((playlist) => (
    <div
      role="button"
      onClick={() => {
        setDropdownOpen(false);
        addTrackToPlaylist(playlist, track);
      }}
      key={playlist.id}
      className="item"
    >
      {playlist.title}
    </div>
  ));
  return (
    <>
      <Dropdown
        open={dropdownOpen}
        onOpen={() => setDropdownOpen(true)}
        onClose={() => setDropdownOpen(false)}
        as="div"
        icon="plus"
        className="ui icon top right pointing dropdown button"
        closeOnBlur={false}
      >
        <Dropdown.Menu>
          <Dropdown.Header>Add to playlist</Dropdown.Header>
          <div className="ui search icon input">
            <i className="search icon"></i>
            <input
              ref={searchInputRef}
              value={filter}
              type="text"
              name="search"
              placeholder="Search playlists..."
              onChange={handleFilterChange}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {playlistItems}
        </Dropdown.Menu>
      </Dropdown>
      <button className="ui icon button" onClick={editTrack}>
        <i className="edit icon"></i>
      </button>
      <button className="ui icon button red" onClick={() => deleteTrack(track)}>
        <i className="trash icon"></i>
      </button>
    </>
  );
}
