import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "./ArticleHero";
import PlaceCarousel from "./PlaceCarousel";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeSearch />
      <WhereNext />
      <ArticleHero />
      <PlaceCarousel />
    </div>
  );
}

export default HomePage;
