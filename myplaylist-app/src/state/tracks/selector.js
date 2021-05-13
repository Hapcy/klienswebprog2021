export function selectTracks(state) {
  return state.tracks.items;
}

export function selectTracksFetching(state) {
  return state.tracks.fetching;
}
