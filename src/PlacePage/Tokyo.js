import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import { tokyoPlaces } from "../Reference/AllPlaces";
import { articles } from "../Reference/Articles";
import TickerTape from "../Shared/TickerTape";
import Spotlight from "../ExplorePlaces/Spotlight";
const meijiSpotlight = tokyoPlaces[0];

function Tokyo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const tokyoArticle = articles[3];

  const placeIntro = ` Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
  from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto
  Shrine is known for its towering gate and surrounding woods.`;

  const shortDescription = ` Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
  from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto
  Shrine is known for its towering gate and surrounding woods. The
  Imperial Palace sits amid large public gardens. The city's many museums
  offer exhibits ranging from classical art (in the Tokyo National Museum)
  to a reconstructed kabuki theater (in the Edo-Tokyo Museum).`;

  const longDescriptionPara1 = `Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous
  metropolis. It is also one of Japan's 47 prefectures, consisting of 23
  central city wards and multiple cities, towns and villages west of the
  city center. The Izu and Ogasawara Islands are also part of Tokyo.
  Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th
  century, Edo became Japan's political center in 1603 when Tokugawa
  Ieyasu established his feudal government there.`;

  const longDescriptionPara2 = `A few decades later, Edo had grown into one of the world's most
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
        src="img/place-squares/tokyo-2.jpg"
        placeName="Tokyo, Japan"
        imgCaption="Harajuku"
        weatherCityName="Tokyo"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="Tokyo" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={
          <div>
            <p className="read-more-content">{longDescriptionPara1}</p>
            <p className="read-more-content">{longDescriptionPara2}</p>
          </div>
        }
      />
      <KeyStats language="Japanese" currency="Yen" population="9.2 million" />
      <PlaceCarousel
        title={"The very best of Tokyo."}
        places={tokyoPlaces.filter((tokyoPlace, index) => index > 0)}
      />
      <Spotlight
        cardName={meijiSpotlight.cardName}
        cardCaption={meijiSpotlight.cardCaption}
        country={meijiSpotlight.country}
        route={meijiSpotlight.route}
        src={meijiSpotlight.src}
        alt={meijiSpotlight.alt}
      />
      <ArticleHero
        articleName={tokyoArticle.articleName}
        authorName={tokyoArticle.authorName}
        contentTag={tokyoArticle.contentTag}
        imgSrc={tokyoArticle.imgSrc}
      />
    </div>
  );
}

export default Tokyo;
