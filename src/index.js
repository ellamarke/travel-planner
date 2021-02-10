import { React, Component } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./css/index.css";

import HomePage from "./HomePage";
import Place from "./Place";
import Profile from "./Profile";
import Error from "./Error";
import NavBar from "./NavBar";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/place" component={Place} />
      <Route path="/profile" component={Profile} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
