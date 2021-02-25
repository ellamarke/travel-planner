import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { tokyoPlaces } from "../Reference/AllPlaces";

function GenericPlacePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="place">
      <PlaceHero
        placeName={placeName}
        imgCaption={imgCaption}
        weatherCityName={placeName}
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language={language}
        currency={currency}
        population={population}
      />
      <PlaceCarousel
        title={`The very best of ${placeName}`}
        places={tokyoPlaces}
      />
      <PlacePageCaseStudy
        cardName="Meiji Jingu Shrine"
        cardCaption="Two, large gates frame the entrance to this Shinto shrine that was dedicated to Emperor and Empress Meiji. Completed in 1920, repairs were required after the shrine was damaged during World War II."
        country="Japan"
      />
      <ArticleHero
        articleName={`${placeName}'s cultural hotspots just got a major boost`}
        contentTag="culture"
      />
    </div>
  );
}

export default GenericPlacePage;
