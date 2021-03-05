import "../css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { hardCodedPlaces } from "../Reference/AllPlaces";
import { articles } from "../Reference/Articles";
import TickerTape from "../Shared/TickerTape";

const parisArticle = articles[4];

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <TickerTape tickerText="Grab your passport" />
      <HomeSearch />
      <WhereNext title="Find somewhere new!" />
      <ArticleHero
        articleName={parisArticle.articleName}
        authorName={parisArticle.authorName}
        contentTag={parisArticle.contentTag}
        imgSrc={parisArticle.imgSrc}
      />
      <PlaceCarousel
        title={"Some of our favourite places."}
        places={hardCodedPlaces.filter((hardCodedPlace, index) => index < 4)}
      />
    </div>
  );
}

export default HomePage;
