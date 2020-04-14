import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./component/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/react-portfolio" component={Jumbotron} />
      </div>
    </Router>
  );
}

export default App;
