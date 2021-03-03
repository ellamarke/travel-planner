import "../css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { hardCodedPlaces } from "../Reference/AllPlaces";
import TickerTape from "../Shared/TickerTape";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <TickerTape tickerText="Grab your passport" />
      <HomeSearch />
      <WhereNext title="Find somewhere new!" />
      <ArticleHero articleName="Peru: Our New Obsession" contentTag="culture" />
      <PlaceCarousel
        title={"Some of our favourite places"}
        places={hardCodedPlaces.filter((hardCodedPlace, index) => index < 4)}
      />
    </div>
  );
}

export default HomePage;
