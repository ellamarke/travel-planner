import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { marrakechPlaces } from "../Reference/AllPlaces";

function Marrakech() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `Colourful souks, Moorish architecture, intimate gardens and boutique hotels--Marrakesh is unforgettable. Spend your days exploring the quiet courtyards and snaking alleyways of the historic Medina, walking through the serene Jardin Majorelle or taking in the beauty of the city’s mosques before ending the evening at a one-of-a-kind riad.`;

  const longDescription = `Bahia Palace and the Dar Si Said are a riot of tilework and intricate floral painted-wood ceilings, the Saadian Tombs are enriched by an opulent bounty of marble, while the Musée de Mouassine and Musée de Marrakech are a showcase of swirling stucco and carved-wood design. And if you choose to bed down for a night in a riad, you'll be able to sleep amid some of this splendour too. Marrakesh is a city steeped in ancient artistry that continues to thrive, kept alive by the modern craftspeople of the souqs and the contemporary art and design scene of the Ville Nouvelle.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Marrakech"
        imgCaption="Medina of Marrakech"
        weatherCityName="Marrakech"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Arabic" currency="Dirham" population="929,000" />
      <PlaceCarousel
        title={"The very best of Marrakech"}
        places={marrakechPlaces}
      />
      <PlacePageCaseStudy
        cardName="Jardin Majorelle"
        cardCaption="French fashion designer Yves Saint Laurent and his partner Pierre Bergé bought Jardin Majorelle in 1984 to preserve the vision of its original owner, French landscape painter Jacques Majorelle, and keep it open to the public. The garden, started in 1924, contains a psychedelic desert mirage of 300 plant species from five continents."
      />
      <ArticleHero
        articleName="Marrakech's riads represent a possible future of architecture"
        contentTag="architecture"
      />
    </div>
  );
}

export default Marrakech;
