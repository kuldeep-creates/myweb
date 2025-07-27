import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active m-3" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/About">{props.aboutext}</Link>
            </li>
          </ul>

          {/* Color mode buttons */}
          <div className="d-flex">
            <button type="button" className="btn btn-light mx-1" onClick={props.toggleMode1}>Light</button>
            <button type="button" className="btn btn-dark mx-1" onClick={props.toggleMode2}>Dark</button>
            <button type="button" className="btn btn-success mx-1" onClick={props.toggleMode3}>Success</button>
            <button type="button" className="btn btn-danger mx-1" onClick={props.toggleMode4}>Danger</button>
            <button type="button" className="btn btn-warning mx-1" onClick={props.toggleMode5}>Warning</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutext: PropTypes.string,
  darkMode: PropTypes.string.isRequired,
  toggleMode1: PropTypes.func.isRequired,
  toggleMode2: PropTypes.func.isRequired,
  toggleMode3: PropTypes.func.isRequired,
  toggleMode4: PropTypes.func.isRequired,
  toggleMode5: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "My App",
  aboutext: "About",
};
