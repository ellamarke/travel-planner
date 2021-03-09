import React, { useLayoutEffect } from "react";

import CuratedPlaceIntro from "./CuratedPlaceIntro";
import PlaceCaseStudy from "./PlaceCaseStudy";
import TempleCarousel from "./TempleCarousel";
import WhereNext from "../HomePage/WhereNext";
import TickerTape from "../Shared/TickerTape";

import { temples } from "../Reference/AllPlaces";

function TemplePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <CuratedPlaceIntro
        introTitle="Crumbling Temples"
        introText={
          "A temple (from the Latin word templum) is a building reserved for religious or spiritual rituals and activities such as prayer and sacrifice. The term typically used for such buildings belonging to all faiths where a more specific term such as church, mosque or synagogue is not generally used in English. These include Hinduism, Buddhism, Sikhism and Jainism among religions with many modern followers, as well as other ancient religions such as Ancient Egyptian religion."
        }
      />
      <TickerTape tickerText="Crumbling Temples" />
      <div className="case-study-container">
        {temples
          .map((temple) => (
            <PlaceCaseStudy temple={temple} key={temple.cardName} />
          ))
          .filter((temple, index) => index < 3)}
      </div>
      <TempleCarousel
        title={"You can also find temples here."}
        temples={temples}
      />
      <div className="where-next-curated">
        <WhereNext />
      </div>
    </div>
  );
}

export default TemplePage;
