import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import JungleCaseStudy from "./JungleCaseStudy";
import JungleCarousel from "./JungleCarousel";
import WhereNext from "../HomePage/WhereNext";
import TickerTape from "../Shared/TickerTape";

import { jungles } from "../Reference/AllPlaces";

function JunglePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <CuratedPlaceIntro
        introTitle="Dark Jungles"
        introText={
          "A jungle is land covered with dense forest and tangled vegetation, usually in tropical climates. Application of the term has varied greatly during the past recent centuries. Before the 1970s, tropical forests were generally referred to as jungles, but this terminology has fallen out of usage."
        }
      />
      <TickerTape tickerText="Dark Jungles" />
      <div className="case-study-container">
        {jungles
          .map((jungle) => (
            <JungleCaseStudy jungle={jungle} key={jungle.cardName} />
          ))
          .filter((jungle, index) => index < 3)}
      </div>
      <JungleCarousel
        title={"YOU CAN ALSO FIND JUNGLES HERE"}
        jungles={jungles}
      />
      <div className="where-next-curated">
        <WhereNext />
      </div>
    </div>
  );
}

export default JunglePage;
