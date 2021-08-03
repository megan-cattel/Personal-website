import React from "react";
import { Link, withRouter } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/journalism">Journalism</Link>
  </div>
  );
}

export default withRouter(Nav);