import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "./ArticleHero";
import PlaceCarousel from "./PlaceCarousel";
import places from "./AllPlaces";

function MyCountry() {
  return (
    <div className="my-country">
      <MyCountryHero />
      <MyCountryNotes />
      <MyCountryPlaces />
      <MyCountryArticles />
    </div>
  );
}

export default MyCountry;
