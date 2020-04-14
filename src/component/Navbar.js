import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class Navbar extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", () => {
  //     const isTop = window.scrollY > 100;
  //     const nav = document.getElementById("nav");
  //     if (isTop) {
  //       nav.classList.add("scrolled");
  //     } else {
  //       nav.classList.remove("scrolled");
  //     }
  //   });
  // }

  // handleAnimate() {
  //   var header = document.getElementById("header-section");
  //   header.style.marginLeft = "25px";
  // }

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
          Tyler Snyder
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
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
                to="/resume"
                className={
                  window.location.pathname === "/resume"
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
