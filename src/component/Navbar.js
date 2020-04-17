import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav id="nav" className="navbar navbar-expand-lg fixed">
        <Link
          to="/react-portfolio"
          className={
            window.location.pathname === "/react-portfolio" ||
            window.location.pathname === "/react-portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span style={{ color: "black" }}>Tyler </span>
          <span style={{ color: "#b0b0b0" }}>Snyder</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars fa-lg" style={{ color: "#3489eb" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/skills"
                className={
                  window.location.pathname === "/skills"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/react-portfolio/resume.pdf"
                target="_blank"
                className={
                  window.location.pathname === "/resume.pdf"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
