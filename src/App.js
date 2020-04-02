import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Home";
import Navigation from "./navigation";
import StickyFooter from "./StickyFooter";
import About from "./About";
import CommunityNorms from "./CommunityNorms";
import SubCategoryPreviews from "./SubCategoryPreviews";

const firebase = require("firebase");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdsb284ih2kcKvrwKpWx4DyEoj2v_5kTc",
    authDomain: "covidb-70de9.firebaseapp.com",
    databaseURL: "https://covidb-70de9.firebaseio.com",
    projectId: "covidb-70de9",
    storageBucket: "covidb-70de9.appspot.com",
    messagingSenderId: "857438317727",
    appId: "1:857438317727:web:70943a63db1a6452e886aa",
    measurementId: "G-M6XL98EQM8"
  };
firebase.initializeApp(config);

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
