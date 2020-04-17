import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Portfolio from "./component/pages/Portfolio";
import Skills from "./component/pages/Skills";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/react-portfolio" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
