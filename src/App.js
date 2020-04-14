import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/react-portfolio" component={Home} />
      </div>
    </Router>
  );
}

export default App;
