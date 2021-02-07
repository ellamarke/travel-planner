import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "./ArticleHero";
import ArticleCarousel from "./ArticleCarousel";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeSearch />
      <WhereNext />
      <ArticleHero />
      <ArticleCarousel />
    </div>
  );
}

export default HomePage;
