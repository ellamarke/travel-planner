import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React, { useLayoutEffect } from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import MountainCaseStudy from "./MountainCaseStudy";
import MountainCarousel from "./MountainCarousel";
import WhereNext from "../HomePage/WhereNext";

import { mountains } from "../Reference/AllPlaces";

function MountainPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mountainPlaces">
      <CuratedPlaceHero
        curatedPlacesName={"Misty Mountains"}
        heroImageName={"Mount Everest, Nepal"}
      />
      <CuratedPlaceIntro
        introText={
          "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges."
        }
      />
      {mountains
        .map((mountain) => (
          <MountainCaseStudy mountain={mountain} key={mountain.cardName} />
        ))
        .filter((mountain, index) => index < 3)}
      <MountainCarousel
        title={"YOU CAN ALSO FIND MOUNTAINS HERE"}
        mountains={mountains}
      />
      <WhereNext />
    </div>
  );
}

export default MountainPage;
