import React, { useState } from 'react';
import classnames from 'classnames';
import { Modal } from 'semantic-ui-react';

function useForm(defaultValue, validators) {
  const [formState, setFormState] = useState(defaultValue);
  const [validationState, setValidationState] = useState(() =>
    Object.keys(validators).reduce((defaultValidation, key) => {
      return {
        ...defaultValidation,
        [key]: validators[key](formState[key]),
      };
    }, {}),
  );
  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setValidationState({
      ...validationState,
      [name]: validators[name](value),
    });
  };
  const isValid = Object.values(validationState).every(validationResult => !validationResult);
  return {
    handleFormChange,
    formState,
    validationState,
    isValid,
  };
}

function requiredValidator(fieldName) {
  return value => {
    if (value) {
      return null;
    } else {
      return `${fieldName} is required.`;
    }
  };
}

export function TrackForm({ onSubmit, track, openModal, closeModal, modalOpen }) {
  const { formState, handleFormChange, isValid, validationState } = useForm(
    {
      artist: '',
      title: '',
      length: '',
      thumbnailURL: '',
      spotifyURL: '',
      lyricsURL: '',
      chordsURL: '',
      ...track,
    },
    {
      artist: requiredValidator('Author'),
      title: requiredValidator('Title'),
      length: requiredValidator('Length'), // TODO: every, patternValidator
    },
  );
  return (
    <Modal
      noValidate
      onSubmit={e => {
        e.preventDefault();
        if (isValid) {
          onSubmit(formState);
          closeModal();
        }
      }}
      as="form"
      closeIcon
      open={modalOpen}
      onClose={closeModal}
      onOpen={openModal}
    >
      <Modal.Header>Add new Track</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div className={classnames({ ui: true, form: true, error: !isValid })}>
            <div className="three fields">
              <div
                className={classnames({
                  field: true,
                  error: validationState.artist,
                })}
              >
                <label htmlFor="artist">Author</label>
                <input
                  value={formState.artist}
                  name="artist"
                  required
                  type="text"
                  placeholder="John Williams"
                  onChange={handleFormChange}
                />
              </div>
              <div
                className={classnames({
                  field: true,
                  error: validationState.title,
                })}
              >
                <label htmlFor="title">Track name</label>
                <input
                  value={formState.title}
                  name="title"
                  required
                  type="text"
                  placeholder="Imperial March"
                  onChange={handleFormChange}
                />
              </div>
              <div
                className={classnames({
                  field: true,
                  error: validationState.length,
                })}
              >
                <label htmlFor="length">Length</label>
                <input
                  value={formState.length}
                  name="length"
                  required
                  type="text"
                  placeholder="4:20"
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label htmlFor="spotifyURL">Spotify URL</label>
                <input
                  value={formState.spotifyURL}
                  name="spotifyURL"
                  type="text"
                  placeholder="https://"
                  onChange={handleFormChange}
                />
              </div>
              <div className="field">
                <label htmlFor="lyricsURL">Lyrics URL</label>
                <input
                  value={formState.lyricsURL}
                  name="lyricsURL"
                  type="text"
                  placeholder="https://"
                  onChange={handleFormChange}
                />
              </div>
              <div className="field">
                <label htmlFor="chordsURL">Guitar tab URL</label>
                <input
                  value={formState.chordsURL}
                  name="chordsURL"
                  type="text"
                  placeholder="https://"
                  onChange={handleFormChange}
                />
              </div>
            </div>
            {isValid ? null : (
              <div className="ui error message">
                <ul className="list">
                  {Object.entries(validationState)
                    .filter(([_, message]) => !!message)
                    .map(([key, message]) => (
                      <li key={key}>{message}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <div className="ui black deny button" onClick={closeModal}>
          Cancel
        </div>
        <button className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </Modal.Actions>
    </Modal>
  );
}
