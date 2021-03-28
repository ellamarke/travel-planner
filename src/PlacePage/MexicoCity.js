import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import Spotlight from "../ExplorePlaces/Spotlight";
import { mexicoCityPlaces } from "../Reference/AllPlaces";
import TickerTape from "../Shared/TickerTape";
import { articles } from "../Reference/Articles";
import SetPageState from "../Shared/setPageState";

function MexicoCity() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const spotlightContent = mexicoCityPlaces[0];
  const articleContent = articles[7];

  const placeIntro =
    "Mexico City is, and has always been, the sun in the Mexican solar system. Though much-maligned in the past, these days the city is cleaning up its act. Revamped public spaces are springing back to life, the culinary scene is exploding and a cultural renaissance is flourishing.";

  const shortDescription = `
  Vibrant food, nightlife, art, and culture—all anchored by an ancient history
  A sprawling metropolis, Mexico City invites comparisons to other cities for its scale and its importance as a continental hub. Walk through the Centro Historico at night, and you’ll find it has the up-all-night energy and culinary scene of any other global capital. But CDMX (Ciudad de México) is more than just urban bustle—it’s a collision of contemporary life with ancient history dating back to the Aztecs. That history echoes through everything here, from street food to music to vivid murals, giving a deeper resonance to daily life.`;

  const longDescription = `Mexico's capital is both the oldest capital city in the Americas and one of two founded by indigenous people, the other being Quito, Ecuador. The city was originally built on an island of Lake Texcoco by the Aztecs in 1325 as Tenochtitlan, which was almost completely destroyed in the 1521 siege of Tenochtitlan and subsequently redesigned and rebuilt in accordance with the Spanish urban standards. In 1524, the municipality of Mexico City was established, known as México Tenochtitlán, and as of 1585, it was officially known as Ciudad de México (Mexico City). Mexico City was the political, administrative, and financial center of a major part of the Spanish colonial empire. After independence from Spain was achieved, the federal district was created in 1824.`;

  return (
    <div className="place">
      <SetPageState pageState="explore" />
      <PlaceHero
        placeName="Mexico City, Mexico"
        imgCaption="Floating Gardens of Xochimilco"
        weatherCityName="Mexico City"
        src="/img/place-squares/mexico-city.jpg"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="Mexico City" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="Spanish"
        currency="Peso"
        population="9209944"
        place="Mexico City"
      />
      <PlaceCarousel
        title={"The very best of Mexico City."}
        places={mexicoCityPlaces.filter((mexicoCityPlace, index) => index > 0)}
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

export default MexicoCity;
