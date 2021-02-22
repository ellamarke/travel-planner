import "../css/App.css";
import "../css/Profile.css";
import "../css/CuratedPlaces.css";

import React, { useLayoutEffect } from "react";

import CuratedPlaceHero from "./CuratedPlaceHero";
import CuratedPlaceIntro from "./CuratedPlaceIntro";
import LakeCaseStudy from "./LakeCaseStudy";
import LakeCarousel from "./LakeCarousel";
import WhereNext from "../HomePage/WhereNext";

import { lakes } from "../Reference/AllPlaces";

function LakePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="curatedPlaces">
      <CuratedPlaceHero
        curatedPlacesName={"Great Lakes"}
        heroImageName={"Lake Superior, USA"}
      />
      <CuratedPlaceIntro
        introText={
          "A lake is an area filled with water, localized in a basin, surrounded by land, apart from any river or other outlet that serves to feed or drain the lake. Lakes lie on land and are not part of the ocean, although like the much larger oceans, they form part of earth's water cycle. Lakes are distinct from lagoons which are generally coastal parts of the ocean. They are generally larger and deeper than ponds, which also lie on land, though there are no official or scientific definitions. Lakes can be contrasted with rivers or streams, which are usually flowing in a channel on land. Most lakes are fed and drained by rivers and streams."
        }
      />
      {lakes
        .map((lake) => <LakeCaseStudy lake={lake} key={lake.cardName} />)
        .filter((lake, index) => index < 3)}
      <LakeCarousel title={"YOU CAN ALSO FIND LAKES HERE"} lakes={lakes} />
      <WhereNext />
    </div>
  );
}

export default LakePage;
