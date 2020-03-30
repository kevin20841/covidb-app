import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HelloWorld from "./HelloWorld";
import Home from "./Home";
import StickyFooter from "./StickyFooter";

function App() {
  return (
    <Router>
      <div>
        {/* Please please please don't edit this for content, just make new files for them please. */}
        <Switch>
          <Route exact path="/">
            <p>home ayylmao</p>
            <Home />
          </Route>
          <Route path="/testing">
            <p>testing ayylmao</p>
            <HelloWorld />
          </Route>
          <Route path="/about">
            <p>about ayylmao</p>
            <HelloWorld />
          </Route>
        </Switch>
      </div>
      <Route path="/">
          <p>footer ayylmao</p>
          <StickyFooter />
      </Route>
    </Router>
  );
}

export default App;
