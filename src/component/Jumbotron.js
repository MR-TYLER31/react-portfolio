import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default Jumbotron;
