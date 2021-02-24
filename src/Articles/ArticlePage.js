import ArticlePageHero from "./ArticlePageHero";
import ArticlePageContent from "./ArticlePageContent";

function ArticlePage() {
  return (
    <div className="article-page">
      <ArticlePageHero
        articleName="Paradise is here"
        authorName="Aliyah Smith"
        contentTag="new destinations"
      />
      <ArticlePageContent />
    </div>
  );
}

export default ArticlePage;
