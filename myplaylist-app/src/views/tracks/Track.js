import React from 'react';
import { PlaylistTypes } from '../../domain/playlist';
import { TrackTypes } from '../../domain/track';
import { TrackActions } from './TrackActions';

export function Track({ track, playlists, deleteTrack, editTrack, addToPlaylist }) {
  const { artist, title } = track;
  return (
    <tr>
      <td>
        <i className="user icon"></i> {artist}
      </td>
      <td>
        <i className="music icon"></i> {title}
      </td>
      <td className="right aligned collapsing">
        <TrackActions
          deleteTrack={deleteTrack}
          editTrack={editTrack}
          addToPlaylist={addToPlaylist}
          playlists={playlists}
        ></TrackActions>
      </td>
    </tr>
  );
}

Track.propTypes = {
  track: TrackTypes.Track.isRequired,
  playlists: PlaylistTypes.PlaylistList.isRequired,
};
