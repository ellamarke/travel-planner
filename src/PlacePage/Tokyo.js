import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { tokyoPlaces } from "../Reference/AllPlaces";

function Tokyo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = ` Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
  from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto
  Shrine is known for its towering gate and surrounding woods. The
  Imperial Palace sits amid large public gardens. The city's many museums
  offer exhibits ranging from classical art (in the Tokyo National Museum)
  to a reconstructed kabuki theater (in the Edo-Tokyo Museum).`;

  const longDescription = `Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous
  metropolis. It is also one of Japan's 47 prefectures, consisting of 23
  central city wards and multiple cities, towns and villages west of the
  city center. The Izu and Ogasawara Islands are also part of Tokyo.
  Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th
  century, Edo became Japan's political center in 1603 when Tokugawa
  Ieyasu established his feudal government there.
  ${(<br />)}A few decades later, Edo had grown into one of the world's most
  populous cities. With the Meiji Restoration of 1868, the emperor and
  capital moved from Kyoto to Edo, which was renamed Tokyo ("Eastern
  Capital"). Large parts of Tokyo were destroyed in the Great Kanto
  Earthquake of 1923 and in the air raids of 1945. Today, Tokyo offers a
  seemingly unlimited choice of shopping, entertainment, culture and
  dining to its visitors. The city's history can be appreciated in
  districts such as Asakusa and in many excellent museums, historic
  temples and gardens. Contrary to common perception, Tokyo also offers
  a number of attractive green spaces in the city center and within
  relatively short train rides at its outskirts.`;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Tokyo, Japan"
        imgCaption="Harajuku"
        weatherCityName="Tokyo"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="Japanese" currency="Yen" population="9.2 million" />
      <PlaceCarousel title={"The very best of tokyo"} places={tokyoPlaces} />
      <PlacePageCaseStudy
        cardName="Meiji Jingu Shrine"
        cardCaption="Two, large gates frame the entrance to this Shinto shrine that was dedicated to Emperor and Empress Meiji. Completed in 1920, repairs were required after the shrine was damaged during World War II."
        country="Japan"
      />
      <ArticleHero
        articleName="Tokyo's cultural hotspots just got a major boost"
        contentTag="culture"
      />
    </div>
  );
}

export default Tokyo;
