import "../css/App.css";
import { useLayoutEffect } from "react";
import ExploreHero from "./ExploreHero";
import TickerTape from "../Shared/TickerTape";
import WhereNext from "../HomePage/WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleCarousel from "../Shared/ArticleCarousel";
import { hardCodedPlaces, indiaPlaces } from "../Reference/AllPlaces";
import PageIntro from "../Shared/PageIntro";
import { articles } from "../Reference/Articles";
import Spotlight from "./Spotlight";

const petraArticle = articles[5];
const jaipurSpotlight = indiaPlaces[0];

const pageIntroContent =
  "Fugiat ullamco cillum consectetur laboris veniam sint occaecat eu commodo pariatur. Quis do id elit duis est. Ut est do sit dolor voluptate ipsum esse amet excepteur proident laboris. Laboris exercitation dolore eiusmod eiusmod esse velit ad ad dolor et exercitation. Qui incididunt laborum duis dolor nostrud anim commodo sint ex amet.";

function ExplorePlacesPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home-page">
      <ExploreHero />
      <TickerTape tickerText="Let's go travelling" />
      <PageIntro pageIntroContent={pageIntroContent} />
      <PlaceCarousel
        title={"Off the beaten track"}
        places={hardCodedPlaces.filter((hardCodedPlace, index) => index > 3)}
      />
      <ArticleHero
        articleName={petraArticle.articleName}
        authorName={petraArticle.authorName}
        contentTag={petraArticle.contentTag}
        imgSrc={petraArticle.imgSrc}
      />
      <ArticleCarousel title={"Let's keep reading."} articles={articles} />
      <Spotlight
        cardName={jaipurSpotlight.cardName}
        cardCaption={jaipurSpotlight.cardCaption}
        country={jaipurSpotlight.country}
        route={jaipurSpotlight.route}
        src={jaipurSpotlight.src}
        alt={jaipurSpotlight.alt}
      />
      <WhereNext title="Need more inspiration?" />
    </div>
  );
}

export default ExplorePlacesPage;
