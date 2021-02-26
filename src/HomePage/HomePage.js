import "../css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { hardCodedPlaces } from "../Reference/AllPlaces";

function HomePage() {
  return (
    <div className="home-page">
      <Hero title="Finding your next adventure" />
      <HomeSearch />
      <WhereNext title="Find somewhere new!" />
      <ArticleHero articleName="Peru: Our New Obsession" contentTag="culture" />
      <PlaceCarousel title={"our favourite places"} places={hardCodedPlaces} />
    </div>
  );
}

export default HomePage;
