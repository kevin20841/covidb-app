import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HelloWorld from "./HelloWorld";
import Home from "./Home";
import Navigation from "./navigation";
import StickyFooter from "./StickyFooter";
import About from "./About";
import CommunityNorms from "./CommunityNorms";
import SubCategoryPreviews from "./SubCategoryPreviews";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navigation />

      <div>
        {/* Please please please don't edit this for content, just make new files for them please. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/testing">
            <p>testing ayylmao</p>
            <HelloWorld />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/communitynorms">
            <CommunityNorms />
          </Route>
          <Route path="/section">
            <SubCategoryPreviews />
          </Route>
        </Switch>
      </div>
      <StickyFooter />
    </Router>
  );
}

export default App;
