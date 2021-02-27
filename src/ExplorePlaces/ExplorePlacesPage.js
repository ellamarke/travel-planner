import "../css/App.css";
import { useLayoutEffect } from "react";
import Hero from "../HomePage/Hero";
import WhereNext from "../HomePage/WhereNext";
import ArticleHero from "../Shared/ArticleHero";
import PlaceCarousel from "../Shared/PlaceCarousel";
import ArticleCarousel from "../Shared/ArticleCarousel";
import { hardCodedPlaces } from "../Reference/AllPlaces";
import CaseStudy from "./CaseStudy";
import PageIntro from "../Shared/PageIntro";
import { articles } from "../Reference/Articles";

const parisArticle = articles[4];
const indiaCaseStudy = hardCodedPlaces[2];

function ExplorePlacesPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home-page">
      <Hero title="Let's explore!" />
      <PageIntro />
      <PlaceCarousel
        title={"Off the beaten track"}
        places={hardCodedPlaces.filter((hardCodedPlace, index) => index > 3)}
      />
      <ArticleHero
        articleName={parisArticle.articleName}
        contentTag={parisArticle.contentTag}
      />
      <ArticleCarousel title={"Reading stuff"} articles={articles} />
      <CaseStudy
        cardName={indiaCaseStudy.cardName}
        cardCaption={indiaCaseStudy.cardCaption}
        country={indiaCaseStudy.country}
      />
      <WhereNext title="Need more inspiration?" />
    </div>
  );
}

export default ExplorePlacesPage;
