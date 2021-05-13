import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../state/user/actions';

export function HomePage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="ui center aligned container">
      <h1>My Playlist App</h1>
      <p>
        Welcome to MPA. To use this awesome piece of software you must log in.
      </p>
      <div className="ui segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <button className="ui blue submit button">Login</button>
            </form>
          </div>
          <div className="middle aligned column">
            <div className="ui big button">
              <i className="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
}
