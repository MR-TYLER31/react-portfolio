import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Contact</h1>
      </div>

      <div className="row contact-row">
        <div className="col-md-12 col-sm-6">
          <div className="col-inner">
            <div className="info-block">
              <div className="contact-icon">
                <i className="fas fa-mobile-alt contact"></i>
              </div>
              <div className="contact-text">
                <h5 className="p4-5">406 868-6967</h5>
              </div>
            </div>
            <div className="info-block ">
              <div className="contact-icon">
                <i className="far fa-envelope contact"></i>
              </div>
              <div className="contact-text">
                <h5> tylersnyder619406@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
