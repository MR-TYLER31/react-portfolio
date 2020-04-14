import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
// import Jumbotron from "./component/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/react-portfolio" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/portfolio" component={Jumbotron} />
        <Route exact path="/resume" component={Jumbotron} />
        <Route exact path="/contact" component={Jumbotron} />  */}
      </div>
    </Router>
  );
}

export default App;
