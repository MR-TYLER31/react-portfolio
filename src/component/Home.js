import React from "react";
import { Spring } from "react-spring/renderprops";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PortfolioBtn from "./PortfolioBtn";
import { Link, useLocation } from "react-router-dom";

// window.onload = function() {
//   var header = document.getElementById("header-section");
//   header.style.marginLeft = "25px";
// };

function Home() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {props => (
        <div style={props}>
          <div className="jumbotron" style={{ headerStyle }}>
            <div className="container">
              <Navbar />
              <Spring
                from={{ opacity: 0, marginTop: 100 }}
                to={{ opacity: 1, marginTop: 300 }}
                config={{ delay: 1000, duration: 1000 }}
              >
                {props => (
                  <div style={props}>
                    <div id="header-section">
                      <hr
                        style={{
                          width: "40%",
                          borderBottom: "5px solid #3489eb"
                        }}
                      />
                      <h1 className="text-center">Tyler Snyder</h1>
                      <hr
                        style={{
                          width: "40%",
                          borderBottom: "5px solid #3489eb"
                        }}
                      />
                      <Link to="/portfolio">
                        <PortfolioBtn renderAs="button"></PortfolioBtn>
                      </Link>
                    </div>
                  </div>
                )}
              </Spring>

              <Footer />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

const headerStyle = {
  background: "white",
  color: "blue",
  padding: "1.5rem"
};

export default Home;
