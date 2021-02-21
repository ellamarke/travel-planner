import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React, { useLayoutEffect } from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import PlaceCaseStudy from "./PlaceCaseStudy";
import TempleCarousel from "./TempleCarousel";
import WhereNext from "../HomePage/WhereNext";

import { temples } from "../Reference/AllPlaces";

function TemplePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <CuratedPlaceHero
        curatedPlacesName={"Crumbling Temples"}
        heroImageName={"Angkor Wat, Cambodia"}
      />
      <CuratedPlaceIntro
        introText={
          "A temple (from the Latin word templum) is a building reserved for religious or spiritual rituals and activities such as prayer and sacrifice. The term typically used for such buildings belonging to all faiths where a more specific term such as church, mosque or synagogue is not generally used in English. These include Hinduism, Buddhism, Sikhism and Jainism among religions with many modern followers, as well as other ancient religions such as Ancient Egyptian religion."
        }
      />
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

export default TemplePage;
