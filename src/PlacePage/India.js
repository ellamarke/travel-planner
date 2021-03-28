import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import { indiaPlaces } from "../Reference/AllPlaces";
import TickerTape from "../Shared/TickerTape";
import Spotlight from "../ExplorePlaces/Spotlight";
import { articles } from "../Reference/Articles";
import SetPageState from "../Shared/setPageState";

function India() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const spotlightContent = indiaPlaces[0];
  const articleContent = articles[9];

  const placeIntro =
    "With its sumptuous mix of traditions, spiritual beliefs, festivals, architecture and landscapes, your memories of India will blaze bright long after you've left its shores.";

  const shortDescription = `From the beaches of sun-soaked Goa to the frenetic bazaars of Mumbai, India offers wealth of vastly different, yet equally enthralling, experiences. Explore the sparkling lakes and palaces of Udaipur, watch traditional Indian dance in Kochi, or buy brilliantly-colored silk saris at a market in Varanasi… no matter how much you travel in India, you’ll always find more to discover in this vibrant, fascinating country.`;

  const longDescription = `India's landscapes are as fantastically varied as its cultural traditions. From the snow-dusted peaks of the Himalaya to the sun-splashed beaches of the tropical south, the country has a bounty of outdoor attractions. You can scout for big jungle cats on scenic wildlife safaris, paddle in the shimmering waters of coastal retreats, take blood-pumping treks high in the mountains, or simply inhale pine-scented air on meditative forest walks. Among all these natural treasures is a wealth of architectural gems, from serene temples rising out of pancake-flat plains to crumbling forts peering over plunging ravines.`;

  return (
    <div className="place">
      <SetPageState pageState="explore" />
      <PlaceHero
        placeName="India"
        imgCaption="Jaipur"
        weatherCityName="New Delhi"
        src="/img/place-squares/india.jpg"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="India" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="447 languages, including English, Hindi and Bengali"
        currency="Rupee"
        population="1380004385"
        place="India"
      />
      <PlaceCarousel
        title={"The very best of India"}
        places={indiaPlaces.filter((indiaPlace, index) => index > 0)}
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

export default India;
