import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { austriaPlaces } from "../Reference/AllPlaces";

function Austria() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `As home to majestic mountains, opulent palaces, and high culture, Austria's attractions are classically sumptuous and enduring. But beyond the waltzes, the strudels, the alpine summits, and Habsburg architecture, its modern cities are proof of just how easily Austria combines the contemporary with the historic.`;

  const longDescription = `Over centuries, the Habsburgs channelled immense wealth into the fine arts and music, collecting palaces the way others do stamps. You’ll still feel their cultural reverberations in Austria today – be it watching Lipizzaner stallions prance at the Spanish Riding School, or crossing the Hofburg to eyeball Rubens masterpieces in the Kunsthistorisches Museum, or Klimt and Schiele at the MuseumsQuartier. The work of classical pop stars such as Mozart, Strauss, Mahler, Haydn and Schubert echo as loudly as ever at lavishly gilded concert halls, and music festivals like Salzburg Festival and Bregenzer Festspiele are staged against uplifting lakeside or mountain backdrops. The journey really is the destination in Austria. Perhaps yours will be a meandering one through deeply carved valleys, on railways that unzip the Alps to thread improbably along sheer mountain flanks, past glaciers and through flower-freckled meadows. Chances are, however, that such lyrical landscapes will have you itching to leap onto a bicycle saddle or lace up hiking boots to reach those enticingly off-the-radar corners of the country. In winter, the slopes hum with skiers and boarders, while summer beckons white-water rafters and canyoners to glacial rivers and lakes that sparkle like gemstones. Der Berg ruft – the mountain calls!

  `;

  //fix breaks not displaying

  return (
    <div className="place">
      <PlaceHero
        placeName="Austria"
        imgCaption="Vienna"
        weatherCityName="Vienna"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats language="German" currency="Euro" population="8.8 million" />
      <PlaceCarousel
        title={"The very best of Austria"}
        places={austriaPlaces}
      />
      <PlacePageCaseStudy
        cardName="Schloss Ambras"
        cardCaption="Picturesquely perched on a hill and set among beautiful gardens, this Renaissance pile was acquired in 1564 by Archduke Ferdinand II, then ruler of Tyrol, who transformed it from a fortress into a palace. Don't miss the centrepiece Spanische Saal (Spanish Hall), the dazzling Armour Collection and the gallery's Velázquez and Van Dyck originals."
      />
      <ArticleHero
        articleName="If you're not already obsessed with Austrian food, you will be soon"
        contentTag="food"
      />
    </div>
  );
}

export default Austria;
