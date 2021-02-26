import { useState, useContext } from "react";
import { Context } from "../Store";
import "../css/Article.css";

function ArticlePageHero({ articleName, authorName, contentTag }) {
  const [state, setState] = useContext(Context);
  const myArticles = state.myArticles;

  function handleClick() {
    console.log("CLICKED!!!!");
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
    <div className="article-page-hero">
      <h1 className="article-page-title">{articleName}</h1>
      <h2 className="author-name">{authorName}</h2>
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
  );
}

export default ArticlePageHero;
