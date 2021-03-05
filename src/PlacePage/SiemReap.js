import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { siemReapPlaces } from "../Reference/AllPlaces";

function SiemReap() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `
  Siem Reap, a resort town in northwestern Cambodia, is the gateway to the ruins of Angkor, the seat of the Khmer kingdom from the 9th–15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon Temple at Angkor Thom.`;

  const longDescription = `Siem Reap has reinvented itself as the epicentre of chic Cambodia, with everything from backpacker party pads to hip hotels, world-class wining and dining across a range of cuisines, sumptuous spas, great shopping, local tours to suit both foodies and adventurers, and a creative cultural scene that includes Cambodia's leading contemporary circus.

  Angkor is a place to be savoured, not rushed, and this is the base from which to plan your adventures. Still think three days at the temples is enough? Think again with Siem Reap on the doorstep.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Siem Reap, Cambodia"
        imgCaption="Angkor Wat"
        weatherCityName="Siem Reap"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Khmer" currency="Riel" population="2 million" />
      <PlaceCarousel
        title={"The very best of Siem Reap"}
        places={siemReapPlaces}
      />
      <PlacePageCaseStudy
        cardName="Angkor Wat"
        cardCaption="Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century. They include the famous Temple of Angkor Wat and, at Angkor Thom, the Bayon Temple with its countless sculptural decorations."
      />
      <ArticleHero
        articleName="The French colonial history of Cambodia"
        contentTag="history"
      />
    </div>
  );
}

export default SiemReap;
