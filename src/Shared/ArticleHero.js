/* import "../css/App.css";
import "../css/Layout.css"; */
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Store";

function ArticleHero({ articleName, authorName, contentTag }) {
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
    <div className="article-hero">
      <div className="article-text">
        <h2 className="article-name" onClick={articleClicked}>
          {articleName}
        </h2>

        <h5 className="author-name">{authorName}</h5>

        <button
          className={favourite ? "button saved-button" : "button save-button"}
          onClick={handleClick}
        >
          {favourite ? "Saved!" : "Save"}
          <img src="img/star.svg" alt="save button" />
        </button>
      </div>

      <img
        className="article-image"
        src="img/articles/paris.jpg"
        alt="article"
        onClick={articleClicked}
      ></img>
    </div>
  );
}

export default ArticleHero;
