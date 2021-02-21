import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import PlaceCaseStudy from "./PlaceCaseStudy";
import TempleCarousel from "./TempleCarousel";
import WhereNext from "../HomePage/WhereNext";

import { temples } from "../Reference/AllPlaces";

function CuratedPlaces() {
  return (
    <div className="curatedPlaces">
      <CuratedPlaceHero />
      <CuratedPlaceIntro />
      {temples
        .map((temple) => <PlaceCaseStudy temple={temple} />)
        .filter((temple, index) => index < 3)}
      <TempleCarousel
        title={"YOU CAN ALSO FIND TEMPLES HERE"}
        temples={temples}
      />
      <WhereNext />
    </div>
  );
}

export default CuratedPlaces;
