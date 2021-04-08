import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="ui secondary menu">
      <img src="assets/logo.png" alt="" />
      <NavLink to="/home" className="item">
        <i className="home icon"></i> Home
      </NavLink>
      <NavLink to="/playlists" className="item">
        <i className="headphones icon"></i> My Playlists
      </NavLink>
      <NavLink to="/tracks" className="item">
        <i className="music icon"></i> Tracks
      </NavLink>
      <NavLink to="/search" className="item">
        <i className="search icon"></i> Search
      </NavLink>
      <div className="ui right dropdown item">
        John Doe
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item">
            <i className="user icon"></i> Profile
          </div>
          <div className="item">
            <i className="settings icon"></i> Settings
          </div>
          <div className="item">
            <i className="sign out icon"></i>Log out
          </div>
        </div>
      </div>
    </nav>
  );
}
