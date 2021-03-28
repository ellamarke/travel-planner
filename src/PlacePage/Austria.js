import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import TickerTape from "../Shared/TickerTape";
import { austriaPlaces } from "../Reference/AllPlaces";
import Spotlight from "../ExplorePlaces/Spotlight";
import { articles } from "../Reference/Articles";
import SetPageState from "../Shared/setPageState";

function Austria() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const spotlightContent = austriaPlaces[0];
  const articleContent = articles[8];

  const placeIntro =
    "Austria is a country of breathtaking contrasts: rugged, snow-capped mountains overlook brightly painted and beautifully crafted streets. One second, you'll be enthralled by shimmering lakes overlooked by log cabins and the next you'll be waltzing through the contemporary design scene in Vienna. If there's one thing for sure, it's that whatever you're looking at will be beautiful.";

  const shortDescription = `As home to majestic mountains, opulent palaces, and high culture, Austria's attractions are classically sumptuous and enduring. But beyond the waltzes, the strudels, the alpine summits, and Habsburg architecture, its modern cities are proof of just how easily Austria combines the contemporary with the historic.`;

  const longDescription = `Over centuries, the Habsburgs channelled immense wealth into the fine arts and music, collecting palaces the way others do stamps. You’ll still feel their cultural reverberations in Austria today – be it watching Lipizzaner stallions prance at the Spanish Riding School, or crossing the Hofburg to eyeball Rubens masterpieces in the Kunsthistorisches Museum, or Klimt and Schiele at the MuseumsQuartier. The work of classical pop stars such as Mozart, Strauss, Mahler, Haydn and Schubert echo as loudly as ever at lavishly gilded concert halls, and music festivals like Salzburg Festival and Bregenzer Festspiele are staged against uplifting lakeside or mountain backdrops. The journey really is the destination in Austria. Perhaps yours will be a meandering one through deeply carved valleys, on railways that unzip the Alps to thread improbably along sheer mountain flanks, past glaciers and through flower-freckled meadows. Chances are, however, that such lyrical landscapes will have you itching to leap onto a bicycle saddle or lace up hiking boots to reach those enticingly off-the-radar corners of the country. In winter, the slopes hum with skiers and boarders, while summer beckons white-water rafters and canyoners to glacial rivers and lakes that sparkle like gemstones. Der Berg ruft – the mountain calls!

  `;

  return (
    <div className="place">
      <SetPageState pageState="explore" />
      <PlaceHero
        placeName="Austria"
        imgCaption="Vienna"
        weatherCityName="Vienna"
        src="img/place-squares/austria.jpg"
        alt="A snowy Austrian mountain"
        placeIntro={placeIntro}
      />
      <TickerTape tickerText="Austria" />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="German"
        currency="Euro"
        population="9006398"
        place="Austria"
      />
      <PlaceCarousel
        title={"The very best of Austria"}
        places={austriaPlaces.filter((austriaPlace, index) => index > 0)}
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

export default Austria;
