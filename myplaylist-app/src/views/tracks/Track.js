import React from 'react';
import { TrackTypes } from '../../domain/track';
import { TrackActions } from './TrackActions';

export function Track({ track, editTrack }) {
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
          editTrack={editTrack}
          track={track}
        ></TrackActions>
      </td>
    </tr>
  );
}

Track.propTypes = {
  track: TrackTypes.Track.isRequired,
};
