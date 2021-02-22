import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React, { useLayoutEffect } from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import DesertCaseStudy from "./DesertCaseStudy";
import DesertCarousel from "./DesertCarousel";
import WhereNext from "../HomePage/WhereNext";

import { deserts } from "../Reference/AllPlaces";

function DesertPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="desertPlaces">
      <CuratedPlaceHero
        curatedPlacesName={"Desert Cities"}
        heroImageName={"Dubai, UAE"}
      />
      <CuratedPlaceIntro
        introText={
          "A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to the processes of denudation. About one-third of the land surface of the world is arid or semi-arid. This includes much of the polar regions, where little precipitation occurs, and which are sometimes called polar deserts or 'cold deserts'."
        }
      />
      {deserts
        .map((desert) => (
          <DesertCaseStudy desert={desert} key={desert.cardName} />
        ))
        .filter((desert, index) => index < 3)}
      <DesertCarousel
        title={"YOU CAN ALSO FIND DESERTS HERE"}
        deserts={deserts}
      />
      <WhereNext />
    </div>
  );
}

export default DesertPage;
