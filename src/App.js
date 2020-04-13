import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
