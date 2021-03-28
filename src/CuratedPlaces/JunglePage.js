import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import JungleCaseStudy from "./JungleCaseStudy";
import JungleCarousel from "./JungleCarousel";
import WhereNext from "../HomePage/WhereNext";
import TickerTape from "../Shared/TickerTape";
import SetPageState from "../Shared/setPageState";

import { jungles } from "../Reference/AllPlaces";

function JunglePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <SetPageState pageState="explore" />
      <CuratedPlaceIntro
        introTitle="Dark Jungles"
        introText={
          "There is nothing quite like the feeling of being surrounded by dense jungle, bathed in dappled light and hearing the sounds of a thousand different animals all at once. The skyscrapers and highways of the nearest city will always feel a million miles away as you're reminded that rainforests and jungles have existed in this way for thousands of years and will, hopefully, exist for thousands of years more."
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
        title={"You can also find jungles here."}
        jungles={jungles}
      />
      <div className="where-next-curated">
        <WhereNext title="Done with jungles?" />
      </div>
    </div>
  );
}

export default JunglePage;
