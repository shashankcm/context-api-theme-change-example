import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import ThemeChange from "./ThemeChange/App";
import LanguageChange from "./LanguageChange/index";

let Home = () => (
  <div>
    <h1>Context API - Theme Change and Language Change</h1>
    <nav>
      <Link to="/ThemeChange">
        <h2>Theme Change</h2>
      </Link>{" "}
      |{" "}
      <Link to="LanguageChange">
        <h2>LanguageChange</h2>
      </Link>
    </nav>
  </div>
);

ReactDOM.render(
  <>
    <Home />
    <Router>
      <ThemeChange path="ThemeChange" />
      <LanguageChange path="LanguageChange" />
    </Router>{" "}
  </>,

  document.getElementById("root")
);
