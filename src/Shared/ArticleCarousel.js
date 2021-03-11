import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store";

function ArticleCarousel({ title, articles }) {
  return (
    <div className="article-carousel">
      <h3>{title}</h3>
      <div className="card-carousel">
        <div className="cards">
          {articles.map((article) => (
            <ArticleCard
              key={article.articleName}
              articleName={article.articleName}
              authorName={article.authorName}
              contentTag={article.contentTag}
              imgSrc={article.imgSrc}
              publishDate={article.publishDate}
              alt={article.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ articleName, authorName, imgSrc, publishDate, alt }) {
  const [state, setState] = useContext(Context);
  const myArticles = state.myArticles;
  const history = useHistory();

  function articleClicked() {
    setState({ ...state, currentArticleName: articleName });
    history.push("/article");
  }

  function handleClick() {
    const newFavourite = !myArticles.includes(articleName);
    if (newFavourite) {
      myArticles.push(articleName);
      setState({ ...state, myArticles: myArticles });
    } else {
      const newMyArticles = myArticles.filter(
        (article) => article !== articleName
      );
      setState({
        ...state,
        myArticles: newMyArticles,
      });
    }
  }

  const favourite = myArticles.includes(articleName);

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
          <button
            className={
              favourite
                ? "button saved-button small-button"
                : "button save-button small-button"
            }
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img src="img/star.svg" alt="save button" />
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

export default ArticleCarousel;

/*
<div className="place-card">
  <img src={src} className="card-image" onClick={goToPlace} alt="china" />
  <div className="card-text">
    <h6 className="card-name" onClick={goToPlace}>
      {cardName}
    </h6>
    <div className="card-buttons">
      <button
        className={
          favourite
            ? "button saved-button small-button"
            : "button save-button small-button"
        }
        onClick={handleClick}
      >
        {favourite ? "Saved!" : "Save"}
        <img src="img/star.svg" alt="save button" />
      </button>
      <img
        src="img/arrow-right.svg"
        className="arrow"
        alt="arrow button"
        onClick={goToPlace}
      />
    </div>
  </div>
</div>;
*/
