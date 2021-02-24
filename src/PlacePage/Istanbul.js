import "../css/App.css";
import { useLayoutEffect } from "react";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleHero from "../Shared/ArticleHero";
import PlacePageCaseStudy from "./PlacePageCaseStudy";
import { istanbulPlaces } from "../Reference/AllPlaces";

function Istanbul() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const shortDescription = `Over the centuries, many cultures have added their mark to Istanbul. Today, you can experience those influences firsthand by exploring its mahalles (neighbourhoods). From the holy sites of Sultanahmet and the 19th-century European elegance of Beyoğlu to the high fashion of Nişantaşı, the vibrant cafe society of Kadıköy and the football-loving streets of Beşiktaş, it’s easy to see why travellers say that Istanbul isn’t just one city, but multiple cities within one.`;

  const longDescription = `Founded as Byzantion by Megarian colonists in 660 BCE, and renamed as Constantinople in 330 CE, the city grew in size and influence, becoming a beacon of the Silk Road and one of the most important cities in history. It served as an imperial capital for almost sixteen centuries, during the Roman/Byzantine (330–1204), Latin (1204–1261), Byzantine (1261–1453), and Ottoman (1453–1922) empires. It was instrumental in the advancement of Christianity during Roman and Byzantine times, before its transformation to an Islamic stronghold following the Fall of Constantinople in 1453 CE. In 1923, after the Turkish War of Independence, Ankara replaced the city as the capital of the newly formed Republic of Turkey. In 1930 the city's name was officially changed to Istanbul, an appellation Greek speakers used since the eleventh century to colloquially refer to the city.

  ${(
    <br />
  )} Over 13.4 million foreign visitors came to Istanbul in 2018, eight years after it was named a European Capital of Culture, making the city the world's fifth-most popular tourist destination. Istanbul is home to several UNESCO World Heritage Sites, and hosts the headquarters of numerous Turkish companies, accounting for more than thirty percent of the country's economy`;

  return (
    <div className="place">
      <PlaceHero
        placeName="Istanbul, Turkey"
        imgCaption="Hagia Sophia"
        weatherCityName="Istanbul"
      />
      <PlaceIntroduction
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
      <KeyStats
        language="Turkish"
        currency="Turkish Lira"
        population="15.5 million"
      />
      <PlaceCarousel
        title={"The very best of istanbul"}
        places={istanbulPlaces}
      />
      <PlacePageCaseStudy
        cardName="Topkapi Palace"
        cardCaption="This enormous palace was the Imperial residence of Ottoman sultans for almost 400 years. Although much of the palace is not accessible, the daily tours of the Harem are of great interest to tourists."
        country="Turkey"
      />
      <ArticleHero
        articleName="Istanbul's ancient history is only part of the story"
        contentTag="history"
      />
    </div>
  );
}

export default Istanbul;