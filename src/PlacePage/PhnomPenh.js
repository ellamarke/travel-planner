import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { phnomPenhPlaces } from "../Reference/AllPlaces";

function PhnomPenh() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `
  Cambodia’s capital can be an assault on the senses. Motorbikes whiz through laneways without a thought for pedestrians; markets exude pungent scents; and all the while the sounds of life – of commerce, of survival – reverberate through the streets. But this is all part of the enigma.`;

  const longDescription = `Phnom Penh was founded in 1434 to succeed Angkor Thom as the capital of the Khmer nation but was abandoned several times before being reestablished in 1865 by King Norodom. The city formerly functioned as a processing centre, with textiles, pharmaceuticals, machine manufacturing, and rice milling. Its chief assets, however, were cultural. Institutions of higher learning included the National University of Phnom Penh (founded in 1956 as the Royal Khmer University), with schools of engineering, fine arts, technology, and agricultural sciences, the latter at Chamcar Daung, a suburb. Also located at Phnom Penh were the Royal University of Agronomic Sciences and the Agricultural School of Prek Leap.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Phnom Penh, Cambodia"
        imgCaption="National Museum of Cambodia"
        weatherCityName="Phnom Penh"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Khmer" currency="Riel" population="2 million" />
      <PlaceCarousel
        title={"The very best of Phnom Penh"}
        places={phnomPenhPlaces}
      />
      <PlacePageCaseStudy
        cardName="Royal Palace"
        cardCaption="Still the dwelling place of the king, this palace contains the Silver Pagoda, whose floor is made up of 5329 silver tiles, each weighing 1.125 kilograms."
      />
      <ArticleHero
        articleName="The French colonial history of Cambodia"
        contentTag="history"
      />
    </div>
  );
}

export default PhnomPenh;
