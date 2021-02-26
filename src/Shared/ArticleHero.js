import "../css/App.css";
import "../css/Layout.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Store";

function ArticleHero({ articleName, contentTag }) {
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
      <img
        className="article-image"
        src="img/grey-rectangle-small.jpg"
        alt="article"
        onClick={articleClicked}
      ></img>
      <div className="article-text">
        <h1 className="article-name" onClick={articleClicked}>
          {articleName}
        </h1>
        <div className="tags">
          <p className="content-tag">{contentTag}</p>
          <img
            onClick={handleClick}
            className={
              favourite ? "reading-list-icon-selected" : "reading-list-icon"
            }
            src="img/reading-list-icon.png"
            alt="article"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ArticleHero;
