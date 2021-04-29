import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrackTypes } from '../../domain/track';
import { addOrUpdateTrack } from '../../state/tracks/actions';
import { selectTracks } from '../../state/tracks/selector';
import { Track } from './Track';
import { TrackForm } from './TrackForm';

export function TracksPage() {
  const dispatch = useDispatch();
  const tracks = useSelector(selectTracks);
  const handleAddOrUpdateTrack = (track) => {
    dispatch(addOrUpdateTrack(track));
  };

  const [trackToEdit, setTrackToEdit] = useState({ id: null });
  const resetTrackToEdit = () => setTrackToEdit({ id: null });

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModalForNew = () => {
    resetTrackToEdit();
    setModalOpen(true);
  };
  const openModalForEdit = (track) => {
    setTrackToEdit(track);
    setModalOpen(true);
  };

  return (
    <>
      <div className="ui container">
        <button
          className="ui right floated green button"
          onClick={openModalForNew}
        >
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                editTrack={() => openModalForEdit(track)}
              ></Track>
            ))}
          </tbody>
        </table>
      </div>
      <TrackForm
        onSubmit={handleAddOrUpdateTrack}
        track={trackToEdit}
        key={trackToEdit.id}
        closeModal={closeModal}
        openModal={openModalForNew}
        modalOpen={modalOpen}
      ></TrackForm>
    </>
  );
}

TracksPage.propTypes = {
  tracks: TrackTypes.TrackList,
};
