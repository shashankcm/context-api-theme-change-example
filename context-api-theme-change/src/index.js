import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import ThemeChange from "./ThemeChange/App";
import LanguageChange from "./LanguageChange/index";

ReactDOM.render(
  <Router>
    <ThemeChange path="ThemeChange" />
    <LanguageChange path="LanguageChange" />
  </Router>,

  document.getElementById("root")
);
