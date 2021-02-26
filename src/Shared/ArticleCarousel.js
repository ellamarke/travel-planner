import "../css/App.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store";

function ArticleCarousel({ title, articles }) {
  return (
    <div className="place-carousel">
      <h2>{title}</h2>
      <div className="card-carousel">
        {articles.map((article) => (
          <ArticleCard
            key={article.articleName}
            articleName={article.articleName}
            authorName={article.authorName}
            contentTag={article.contentTag}
          />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ articleName, authorName }) {
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
    <div className="my-article-card">
      <h1 className="article-name" onClick={articleClicked}>
        {articleName}
      </h1>
      <h2 className="author-name" onClick={articleClicked}>
        {authorName}
      </h2>
      <img
        onClick={handleClick}
        className={
          favourite ? "reading-list-icon-selected" : "reading-list-icon"
        }
        src="img/reading-list-icon.png"
        alt="article"
      ></img>
    </div>
  );
}

export default ArticleCarousel;
