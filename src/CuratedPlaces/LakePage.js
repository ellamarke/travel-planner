import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import LakeCaseStudy from "./LakeCaseStudy";
import LakeCarousel from "./LakeCarousel";
import WhereNext from "../HomePage/WhereNext";

import { lakes } from "../Reference/AllPlaces";
import TickerTape from "../Shared/TickerTape";
import SetPageState from "../Shared/setPageState";

function LakePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <SetPageState pageState="explore" />
      <CuratedPlaceIntro
        introTitle="Great Lakes"
        introText={
          "Who doesn't love a lake? Some of the most beautiful landscapes on Earth are those filled with glistening water. Lakes lie on land and are not part of the ocean, although like the much larger oceans, they form part of earth's water cycle. Lakes are distinct from lagoons which are generally coastal parts of the ocean. They are generally larger and deeper than ponds, which also lie on land, though there are no official or scientific definitions. Lakes can be contrasted with rivers or streams, which are usually flowing in a channel on land. Most lakes are fed and drained by rivers and streams."
        }
      />
      <TickerTape tickerText="Great lakes" />
      <div className="case-study-container">
        {lakes
          .map((lake) => <LakeCaseStudy lake={lake} key={lake.cardName} />)
          .filter((lake, index) => index < 3)}
      </div>
      <LakeCarousel title={"You can also find lakes here"} lakes={lakes} />
      <div className="where-next-curated">
        <WhereNext title="Over lakes?" />
      </div>
    </div>
  );
}

export default LakePage;
