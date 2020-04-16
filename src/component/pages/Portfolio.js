import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Projects from "../../CardData";
function Portfolio() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <div className="row mt-5">
          {Projects.map(project => (
            <div className="col-md-4 col-sm-12">
              <div className="card project-card dtl24 mt-3">
                <img
                  src={project.image}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p>{project.description}</p>

                  <div className="card-btn dtl">
                    <a href={project.site} target="_blank" className="btn top">
                      Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="btn bottom"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
