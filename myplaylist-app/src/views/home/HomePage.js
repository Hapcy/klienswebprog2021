export function HomePage() {
  return (
    <div class="ui center aligned container">
      <h1>My Playlist App</h1>
      <p>
        Welcome to MPA. To use this awesome piece of software you must log in.
      </p>
      <div class="ui segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <div class="ui form">
              <div class="field">
                <label>Username</label>
                <div class="ui left icon input">
                  <input type="text" placeholder="Username" />
                  <i class="user icon"></i>
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui left icon input">
                  <input type="password" />
                  <i class="lock icon"></i>
                </div>
              </div>
              <div class="ui blue submit button">Login</div>
            </div>
          </div>
          <div class="middle aligned column">
            <div class="ui big button">
              <i class="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div class="ui vertical divider">Or</div>
      </div>
    </div>
  );
}
