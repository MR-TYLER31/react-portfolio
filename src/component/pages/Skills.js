import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Skills() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fab fa-html5 fa-5x"></i>
                <p className="text-white">HTML5</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fab fa-css3-alt fa-5x"></i>
                <p className="text-white">CSS3</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fab fa-js fa-5x"></i>
                <p className="text-white">JavaScript</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fab fa-node fa-5x"></i>
                <p className="text-white">Node JS</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fas fa-database  fa-5x"></i>
                <p className="text-white">MySql - NoSql</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card skills-card">
              <div className="card-body text-center">
                <i className="fab fa-react fa-5x"></i>
                <p className="text-white">React JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
