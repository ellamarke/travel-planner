import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import { siemReapPlaces } from "../Reference/AllPlaces";
import TickerTape from "../Shared/TickerTape";
import Spotlight from "../ExplorePlaces/Spotlight";
import { articles } from "../Reference/Articles";

function SiemReap() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const spotlightContent = siemReapPlaces[0];
  const articleContent = articles[11];

  const placeIntro =
    "The life-support system and gateway for the temples of Angkor, Siem Reap was always destined for great things. Visitors come here to see the temples, of course, but there is plenty to do in and around the city when you're templed out.";

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
        src="/img/place-squares/siem-reap.jpg"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="Siem Reap" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Khmer" currency="Riel" population="2 million" />
      <PlaceCarousel
        title={"The very best of Siem Reap"}
        places={siemReapPlaces.filter((siemReap, index) => index > 0)}
      />
      <Spotlight
        cardName={spotlightContent.cardName}
        cardCaption={spotlightContent.cardCaption}
        country={spotlightContent.country}
        route={spotlightContent.route}
        src={spotlightContent.src}
        alt={spotlightContent.alt}
      />
      <ArticleHero
        articleName={articleContent.articleName}
        authorName={articleContent.authorName}
        contentTag={articleContent.contentTag}
        imgSrc={articleContent.imgSrc}
      />
    </div>
  );
}

export default SiemReap;
