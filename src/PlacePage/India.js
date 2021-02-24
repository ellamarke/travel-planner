import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { indiaPlaces } from "../Reference/AllPlaces";

function India() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `From the beaches of sun-soaked Goa to the frenetic bazaars of Mumbai, India offers wealth of vastly different, yet equally enthralling, experiences. Explore the sparkling lakes and palaces of Udaipur, watch traditional Indian dance in Kochi, or buy brilliantly-colored silk saris at a market in Varanasi… no matter how much you travel in India, you’ll always find more to discover in this vibrant, fascinating country.`;

  const longDescription = `India's landscapes are as fantastically varied as its cultural traditions. From the snow-dusted peaks of the Himalaya to the sun-splashed beaches of the tropical south, the country has a bounty of outdoor attractions. You can scout for big jungle cats on scenic wildlife safaris, paddle in the shimmering waters of coastal retreats, take blood-pumping treks high in the mountains, or simply inhale pine-scented air on meditative forest walks. Among all these natural treasures is a wealth of architectural gems, from serene temples rising out of pancake-flat plains to crumbling forts peering over plunging ravines.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="India"
        imgCaption="Jaipur"
        weatherCityName="Jaipur"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="447 languages, including English, Hindi and Bengali"
        currency="Rupee"
        population="1.3 billion"
      />
      <PlaceCarousel title={"The very best of India"} places={indiaPlaces} />
      <PlacePageCaseStudy
        cardName="Hawa Mahal, Jaipur"
        cardCaption="Hawa Mahal is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers."
      />
      <ArticleHero
        articleName="Explore the Indian art scene"
        contentTag="art"
      />
    </div>
  );
}

export default India;
