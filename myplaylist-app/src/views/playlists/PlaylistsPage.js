export function PlaylistsPage() {
  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <div className="ui very relaxed selection list">
              <div className="item">
                <i className="large compact disc middle aligned icon"></i>
                <div className="content">
                  <a className="header">Heavy Metal</a>
                  <div className="description">5 songs</div>
                </div>
              </div>
              <div className="active item">
                <i className="large compact disc middle aligned icon"></i>
                <div className="content">
                  <a className="header">Classics</a>
                  <div className="description">4 songs</div>
                </div>
              </div>
              <div className="item">
                <i className="large compact disc middle aligned icon"></i>
                <div className="content">
                  <a className="header">Movie Soundtracks</a>
                  <div className="description">9 songs</div>
                </div>
              </div>
              <div className="item" id="newPlaylist">
                <i className="large green plus middle aligned icon"></i>
                <div className="content">
                  <a className="header">New</a>
                  <div className="description">Create a new playlist</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui ten wide column">
            <h3>Classics</h3>
            <div className="ui very relaxed selection list">
              <div className="item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                  <a className="header">Highway to hell</a>
                  <div className="description">AC/DC</div>
                </div>
              </div>
              <div className="item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                  <a className="header">Thunderstruck</a>
                  <div className="description">AC/DC</div>
                </div>
              </div>
              <div className="item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                  <a className="header">Take me home country roads</a>
                  <div className="description">John Denver</div>
                </div>
              </div>
              <div className="active item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                  <a className="header">It's my life</a>
                  <div className="description">Bon Jovi</div>
                </div>
              </div>
              <div className="item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                  <a className="header">Livin' on a prayer</a>
                  <div className="description">Bon Jovi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="ui segment">
          <div className="ui items">
            <div className="item">
              <div className="image">
                <img src="assets/bonjovi.jpg" />
              </div>
              <div className="content">
                <a className="header">It's my life</a>
                <div className="meta">
                  <span>Bon Jovi</span>
                  <span>4:35</span>
                </div>
                <div className="extra">
                  <a
                    href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                    className="ui button tiny green button"
                    target="_blank"
                  >
                    <i className="spotify icon"></i>
                    Listen on Spotify
                  </a>
                  <a
                    href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                    className="ui button tiny teal button"
                    target="_blank"
                  >
                    <i className="microphone icon"></i>
                    Show lyrics
                  </a>
                  <a
                    href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                    className="ui button tiny orange button"
                    target="_blank"
                  >
                    <i className="guitar icon"></i>
                    Show chords
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">Add new Playlist</div>
        <div className="image content">
          <div className="description">
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input required type="text" placeholder="My Playlist" />
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Add
            <i className="plus icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}
