import { React } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./Store";

import "./css/index.css";

import HomePage from "./HomePage/HomePage";
import Place from "./PlacePage/Place";
import Profile from "./Profile/Profile";
import Error from "./Error";
import NavBar from "./Shared/NavBar";
import ListEdit from "./Lists/ListEdit";
import CuratedPlaces from "./CuratedPlaces/CuratedPlaces";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/place" component={Place} />
        <Route path="/profile" component={Profile} />
        <Route path="/listEdit" component={ListEdit} />
        <Route path="/curatedPlaces" component={CuratedPlaces} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);

reportWebVitals();
