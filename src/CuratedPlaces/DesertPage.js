import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import DesertCaseStudy from "./DesertCaseStudy";
import DesertCarousel from "./DesertCarousel";
import WhereNext from "../HomePage/WhereNext";
import TickerTape from "../Shared/TickerTape";

import { deserts } from "../Reference/AllPlaces";

function DesertPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="desertPlaces">
      <CuratedPlaceIntro
        introTitle="Wild Deserts"
        introText={
          "A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to the processes of denudation. About one-third of the land surface of the world is arid or semi-arid. This includes much of the polar regions, where little precipitation occurs, and which are sometimes called polar deserts or 'cold deserts'."
        }
      />
      <TickerTape tickerText="Wild Deserts" />
      <div className="case-study-container">
        {deserts
          .map((desert) => (
            <DesertCaseStudy desert={desert} key={desert.cardName} />
          ))
          .filter((desert, index) => index < 3)}
      </div>
      <DesertCarousel
        title={"You can also find deserts here."}
        deserts={deserts}
      />
      <div className="where-next-curated">
        <WhereNext />
      </div>
    </div>
  );
}

export default DesertPage;
