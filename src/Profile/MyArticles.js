import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";

function MyArticles({ articles }) {
  const history = useHistory();
  const articleIntroduction =
    "There’s a lot to read and learn.Save articles for reference here.";

  function handleClick() {
    history.push("/explore");
  }
  return (
    <div className="place-card-grid grey-background">
      <h2>My Articles</h2>
      <div className="intro__button">
        <p className="my-places-introduction">{articleIntroduction}</p>
        <button className="button" onClick={handleClick}>
          Read more
          <img src="img/read.svg" alt="" className="read-icon" />
        </button>
      </div>
      <div className="place-cards">
        {articles.map((article) => (
          <ProfileArticleCard
            key={article.articleName}
            articleName={article.articleName}
            authorName={article.authorName}
            contentTag={article.contentTag}
            imgSrc={article.imgSrc}
            publishDate={article.publishDate}
            alt={article.alt}
          />
        ))}
        {articles.length === 0 && (
          <h3 className="no-content-warning">
            Oops, you haven&apos;t saved any articles yet! Explore new places
            and start saving.
          </h3>
        )}
      </div>
    </div>
  );
}

function ProfileArticleCard({
  articleName,
  authorName,
  imgSrc,
  alt,
  publishDate,
}) {
  const [state, setState] = useContext(Context);
  const history = useHistory();

  function handleClick() {
    const myArticles = state.myArticles;
    const newMyArticles = myArticles.filter(
      (article) => article !== articleName
    );
    setState({ ...state, myArticles: newMyArticles });
  }

  function articleClicked() {
    setState({ ...state, currentArticleName: articleName });
    history.push("/article");
  }

  return (
    <div className="article-card">
      <img
        src={imgSrc}
        className="card-image"
        onClick={articleClicked}
        alt={alt}
      />
      <div className="publish-info">
        <p className="author-name" onClick={articleClicked}>
          {authorName}
        </p>
        <p className="publish-date">{publishDate}</p>
      </div>
      <div className="card-text">
        <h6 className="article-name" onClick={articleClicked}>
          {articleName}
        </h6>
        <div className="card-buttons">
          <button className="delete-button button" onClick={handleClick}>
            delete
          </button>
          <img
            src="img/arrow-right.svg"
            className="arrow"
            alt="arrow button"
            onClick={articleClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default MyArticles;
