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
            <div className="col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{project.name}</h5>
                  <img src={project.image} class="card-img-top" alt="..." />
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
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
