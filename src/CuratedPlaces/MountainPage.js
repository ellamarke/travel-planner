import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import MountainCaseStudy from "./MountainCaseStudy";
import MountainCarousel from "./MountainCarousel";
import WhereNext from "../HomePage/WhereNext";
import TickerTape from "../Shared/TickerTape";

import { mountains } from "../Reference/AllPlaces";

function MountainPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mountainPlaces">
      <CuratedPlaceIntro
        introTitle="Misty Mountains"
        introText="A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges."
      />
      <TickerTape tickerText="Misty Mountains" />
      <div className="case-study-container">
        {mountains
          .map((mountain) => (
            <MountainCaseStudy mountain={mountain} key={mountain.cardName} />
          ))
          .filter((mountain, index) => index < 3)}
      </div>
      <MountainCarousel
        title={"You can also find mountains here."}
        mountains={mountains}
      />
      <div className="where-next-curated">
        <WhereNext title="Want to move on from mountains?" />
      </div>
    </div>
  );
}

export default MountainPage;
