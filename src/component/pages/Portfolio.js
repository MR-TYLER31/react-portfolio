import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import company from "../public/img/display.PNG";
import "./img/display.PNG";

function Portfolio() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card">
              <img
                src="img/display.PNG"
                className="card-img-top"
                alt="company pic"
              />
              <div className="card-body text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
