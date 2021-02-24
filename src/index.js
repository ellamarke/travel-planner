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
import TemplePage from "./CuratedPlaces/TemplePage";
import DesertPage from "./CuratedPlaces/DesertPage";
import JunglePage from "./CuratedPlaces/JunglePage";
import LakePage from "./CuratedPlaces/LakePage";
import MountainPage from "./CuratedPlaces/MountainPage";
import ExplorePlacesPage from "./ExplorePlaces/ExplorePlacesPage";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/place" component={Place} />
        <Route path="/profile" component={Profile} />
        <Route path="/explore" component={ExplorePlacesPage} />
        <Route path="/listEdit" component={ListEdit} />
        <Route path="/temples" component={TemplePage} />
        <Route path="/deserts" component={DesertPage} />
        <Route path="/jungles" component={JunglePage} />
        <Route path="/lakes" component={LakePage} />
        <Route path="/mountains" component={MountainPage} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);

reportWebVitals();
