import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import { marrakechPlaces } from "../Reference/AllPlaces";
import Spotlight from "../ExplorePlaces/Spotlight";
import { articles } from "../Reference/Articles";
import TickerTape from "../Shared/TickerTape";

function Marrakech() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const menaraSpotlight = marrakechPlaces[0];
  const moroccoArticle = articles[6];

  const placeIntro =
    "Founded almost a thousand years ago, Marrakech is one of the great cities of the Maghreb. Somehow this bursting-at-the-seams city exists on the edge of the Sahara Desert, its pink pise (rammed earth) palaces framed by the snow-capped High Atlas.";

  const shortDescription = `Colourful souks, Moorish architecture, intimate gardens and boutique hotels--Marrakesh is unforgettable. Spend your days exploring the quiet courtyards and snaking alleyways of the historic Medina, walking through the serene Jardin Majorelle or taking in the beauty of the city’s mosques before ending the evening at a one-of-a-kind riad.`;

  const longDescription = `Bahia Palace and the Dar Si Said are a riot of tilework and intricate floral painted-wood ceilings, the Saadian Tombs are enriched by an opulent bounty of marble, while the Musée de Mouassine and Musée de Marrakech are a showcase of swirling stucco and carved-wood design. And if you choose to bed down for a night in a riad, you'll be able to sleep amid some of this splendour too. Marrakesh is a city steeped in ancient artistry that continues to thrive, kept alive by the modern craftspeople of the souqs and the contemporary art and design scene of the Ville Nouvelle.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Marrakech, Morocco"
        imgCaption="Medina of Marrakech"
        weatherCityName="Marrakech"
        src="/img/place-squares/morocco.jpg"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="Marrakech" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="Arabic"
        currency="Dirham"
        population="929000"
        place="Marrakech"
      />
      <PlaceCarousel
        title={"The very best of Marrakech."}
        places={marrakechPlaces.filter((marrakechPlace, index) => index > 0)}
      />
      <Spotlight
        cardName={menaraSpotlight.cardName}
        cardCaption={menaraSpotlight.cardCaption}
        country={menaraSpotlight.country}
        route={menaraSpotlight.route}
        src={menaraSpotlight.src}
        alt={menaraSpotlight.alt}
      />
      <ArticleHero
        articleName={moroccoArticle.articleName}
        authorName={moroccoArticle.authorName}
        contentTag={moroccoArticle.contentTag}
        imgSrc={moroccoArticle.imgSrc}
      />
    </div>
  );
}

export default Marrakech;
