import React from "react";
import { Link, withRouter } from "react-router-dom";


function Nav(props) {
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="title"><i>Megan Cattel</i></div>
      </div>
      <div className="row justify-content-center nav-border">
        <ul className="nav">
        <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/" ? "disabled" : ""
            }`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/about" ? "disabled" : ""
            }`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/writing" ? "disabled" : ""
            }`} to="/writing">Writing</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/audio" ? "disabled" : ""
            }`} to="/audio">Audio</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/references" ? "disabled" : ""
            }`} to="/references">References</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${
              props.location.pathname === "/contact" ? "disabled" : ""
            }`} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Nav);