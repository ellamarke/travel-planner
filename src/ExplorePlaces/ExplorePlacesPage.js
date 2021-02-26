import "../css/App.css";
import Hero from "../HomePage/Hero";
import WhereNext from "../HomePage/WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import { places } from "../Reference/AllPlaces";
import CaseStudy from "./CaseStudy";
import PageIntro from "../Shared/PageIntro";
import { articles } from "../Reference/Articles";

const parisArticle = articles[4];

function ExplorePlacesPage() {
  return (
    <div className="home-page">
      <Hero title="Let's explore!" />
      <PageIntro />
      <PlaceCarousel title={"Off the beaten track"} places={places} />
      <ArticleHero
        articleName={parisArticle.articleName}
        contentTag={parisArticle.contentTag}
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

export default ExplorePlacesPage;
