import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { PlaylistTypes } from '../../domain/playlist';

export function useTextFilter(defaultFilter, items, filterFn) {
  const [filter, setFilter] = useState(defaultFilter);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredItems = items.filter((item) => filterFn(item, filter));
  return { filter, handleFilterChange, filteredItems };
}

export function TrackActions({
  playlists,
  deleteTrack,
  editTrack,
  addToPlaylist,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        addToPlaylist(playlist);
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
      >
        <Dropdown.Menu>
          <Dropdown.Header>Add to playlist</Dropdown.Header>
          <div className="ui search icon input">
            <i className="search icon"></i>
            <input
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
      <button className="ui icon button red" onClick={deleteTrack}>
        <i className="trash icon"></i>
      </button>
    </>
  );
}

TrackActions.propTypes = {
  playlists: PlaylistTypes.PlaylistList.isRequired,
};
