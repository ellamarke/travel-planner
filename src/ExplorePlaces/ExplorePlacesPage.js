import "../css/App.css";
import Hero from "../HomePage/Hero";
import WhereNext from "../HomePage/WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { places } from "../Reference/AllPlaces";
import CaseStudy from "./CaseStudy";
import PageIntro from "../Shared/PageIntro";

function HomePage() {
  return (
    <div className="home-page">
      <Hero title="Let's explore!" />
      <PageIntro />
      <PlaceCarousel title={"Off the beaten track"} places={places} />
      <ArticleHero
        articleName="Paris: Re-thinking the City of Romance"
        contentTag="history"
      />
      <PlaceCarousel title={"Travelling East"} places={places} />
      <CaseStudy
        cardName="Warsaw"
        cardCaption="Hello I'm talking about Warsaw"
        country="Poland"
      />
      <WhereNext title="Need more inspiration?" />
    </div>
  );
}

export default HomePage;
