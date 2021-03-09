import ArticlePageHero from "./ArticlePageHero";
import ArticlePageContent from "./ArticlePageContent";
import React, { useContext } from "react";
import { Context } from "../Store";
import { articles } from "../Reference/Articles";
import TickerTape from "../Shared/TickerTape";
import ArticleFooter from "./ArticleFooter";

function ArticlePage() {
  const [state] = useContext(Context);
  const { currentArticleName } = state;
  const currentArticle = articles.find(
    (article) => article.articleName === currentArticleName
  );
  return (
    <div className="article-page">
      <ArticlePageHero
        articleName={currentArticle.articleName}
        authorName={currentArticle.authorName}
        contentTag={currentArticle.contentTag}
      />
      <TickerTape tickerText={currentArticle.contentTag} />
      <ArticlePageContent
        imgSrc={currentArticle.imgSrc}
        imgSrc2={currentArticle.imgSrc2}
        alt={currentArticle.alt}
      />
      <ArticleFooter />
    </div>
  );
}

export default ArticlePage;
