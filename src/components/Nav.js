import React from "react";
import { Link, withRouter } from "react-router-dom";


function Nav(props) {
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="title">Megan Cattel</div>
      </div>
      <div className="row justify-content-center">
        <ul className="nav">
          <li className={`nav-item  ${
              props.location.pathname === "/" ? "active" : ""
            }`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={`nav-item  ${
              props.location.pathname === "/about" ? "active" : ""
            }`}>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className={`nav-item  ${
              props.location.pathname === "/journalism" ? "active" : ""
            }`}>
            <Link className="nav-link" to="/journalism">Journalism</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Nav);