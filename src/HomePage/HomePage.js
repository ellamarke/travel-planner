import "../css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { places } from "../Reference/AllPlaces";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeSearch />
      <WhereNext />
      <ArticleHero articleName="Peru: Our New Obsession" />
      <PlaceCarousel title={"our favourite places"} places={places} />
    </div>
  );
}

export default HomePage;
