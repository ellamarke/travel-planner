import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React, { useLayoutEffect } from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import JungleCaseStudy from "./JungleCaseStudy";
import JungleCarousel from "./JungleCarousel";
import WhereNext from "../HomePage/WhereNext";

import { jungles } from "../Reference/AllPlaces";

function JunglePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <CuratedPlaceHero
        curatedPlacesName={"Dark Jungles"}
        heroImageName={"The Amazon, Brazil"}
      />
      <CuratedPlaceIntro
        introText={
          "A jungle is land covered with dense forest and tangled vegetation, usually in tropical climates. Application of the term has varied greatly during the past recent centuries. Before the 1970s, tropical forests were generally referred to as jungles, but this terminology has fallen out of usage."
        }
      />
      {jungles
        .map((jungle) => (
          <JungleCaseStudy jungle={jungle} key={jungle.cardName} />
        ))
        .filter((jungle, index) => index < 3)}
      <JungleCarousel
        title={"YOU CAN ALSO FIND JUNGLES HERE"}
        jungles={jungles}
      />
      <WhereNext />
    </div>
  );
}

export default JunglePage;
