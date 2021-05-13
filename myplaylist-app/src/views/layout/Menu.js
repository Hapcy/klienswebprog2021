import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { setUser } from '../../state/user/actions';
import { selectUser } from '../../state/user/selector';

export function Menu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
      {user ? (
        <Dropdown
          as="div"
          icon="dropdown"
          className="ui right dropdown item"
          text={user.email}
        >
          <Dropdown.Menu>
            <div className="item" onClick={() => dispatch(setUser(null))}>
              <i className="sign out icon"></i>Log out
            </div>
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </nav>
  );
}
