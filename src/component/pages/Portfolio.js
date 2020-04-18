import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Projects from "../../CardData";

// {
//   Projects.map(project => {
//     console.log(project);
//   });
// }
function Portfolio() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Projects</h1>
      </div>
      <div className="container">
        <div className="row mt-5 align-items-center">
          {Projects.map(project => (
            <div className="col-lg-4  col-md-6 col-sm-12  align-self-center">
              <div className="card project-card dtl24 mt-3">
                <img
                  src={project.image}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p>{project.description}</p>
                  <h5>Built with</h5>
                  <p>{project.built}</p>
                  <div className="card-btn dtl">
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn top"
                    >
                      Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
