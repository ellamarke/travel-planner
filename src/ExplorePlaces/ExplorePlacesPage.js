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
import SetPageState from "../Shared/setPageState";

const petraArticle = articles[5];
const jaipurSpotlight = indiaPlaces[0];

const pageIntroContent =
  "Turns out the world is a pretty big place. This does mean that knowing exactly where to go (and when to do it) can be overwhelming. All is not lost, though! We've collated the absolute best of travel to make your travel planning that much smoother. Find inspiration, read a lot and start organising.";

function ExplorePlacesPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home-page">
      <SetPageState pageState="explore" />
      <ExploreHero />
      <TickerTape tickerText="Let's go travelling" />
      <PageIntro pageIntroContent={pageIntroContent} />
      <PlaceCarousel
        title={"Our current favourites."}
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
