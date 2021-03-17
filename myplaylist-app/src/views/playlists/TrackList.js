export function TrackList() {
  return (
    <>
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
    </>
  );
}
