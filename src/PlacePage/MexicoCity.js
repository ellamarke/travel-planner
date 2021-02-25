import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { mexicoCityPlaces } from "../Reference/AllPlaces";

function MexicoCity() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `
  Vibrant food, nightlife, art, and culture—all anchored by an ancient history
  A sprawling metropolis, Mexico City invites comparisons to other cities for its scale and its importance as a continental hub. Walk through the Centro Historico at night, and you’ll find it has the up-all-night energy and culinary scene of any other global capital. But CDMX (Ciudad de México) is more than just urban bustle—it’s a collision of contemporary life with ancient history dating back to the Aztecs. That history echoes through everything here, from street food to music to vivid murals, giving a deeper resonance to daily life.`;

  const longDescription = `Mexico's capital is both the oldest capital city in the Americas and one of two founded by indigenous people, the other being Quito, Ecuador. The city was originally built on an island of Lake Texcoco by the Aztecs in 1325 as Tenochtitlan, which was almost completely destroyed in the 1521 siege of Tenochtitlan and subsequently redesigned and rebuilt in accordance with the Spanish urban standards. In 1524, the municipality of Mexico City was established, known as México Tenochtitlán, and as of 1585, it was officially known as Ciudad de México (Mexico City). Mexico City was the political, administrative, and financial center of a major part of the Spanish colonial empire. After independence from Spain was achieved, the federal district was created in 1824.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Mexico City, Mexico"
        imgCaption="Floating Gardens of Xochimilco"
        weatherCityName="Mexico City"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Spanish" currency="Peso" population="8.8 million" />
      <PlaceCarousel
        title={"The very best of Mexico City"}
        places={mexicoCityPlaces}
      />
      <PlacePageCaseStudy
        cardName="Museo Nacional de Antropologia"
        cardCaption="Mexico City’s gigantic Museo Nacional de Antropología (MNA) is a well-loved museum with a rich and fascinating story that begins centuries before its doors officially opened. MNA is the most visited museum in the country, boasting one of the world’s largest collections of pre-Columbian relics, artefacts and art."
      />
      <ArticleHero
        articleName="Exploring Mexico City's history of Baroque architecture"
        contentTag="architecture"
      />
    </div>
  );
}

export default MexicoCity;
