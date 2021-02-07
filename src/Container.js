import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "./ArticleHero";
import ArticleCarousel from "./ArticleCarousel";

function Container() {
  return (
    <div className="container">
      <Hero />
      <HomeSearch />
      <WhereNext />
      <ArticleHero />
      <ArticleCarousel />
    </div>
  );
}

export default Container;
