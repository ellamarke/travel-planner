import "../css/App.css";
import "../css/Profile.css";

import React, { useContext } from "react";
import { Context } from "../Store";

import CuratedPlaceHero from "./CuratedPlaceHero";
import PlaceCaseStudy from "./CuratedPlaces/PlaceCaseStudy";
import PlaceCarousel from "../Shared/PlaceCarousel";
import WhereNext from "../HomePage/WhereNext";

function CuratedPlaces() {
  return (
    <div className="curatedPlaces">
      <CuratedPlaceHero />
      <CuratedPlaceIntro />
      <PlaceCaseStudy />
      <PlaceCaseStudy />
      <PlaceCaseStudy />
      <PlaceCarousel />
      <WhereNext />
    </div>
  );
}

export default CuratedPlaces;
