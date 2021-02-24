import "../css/App.css";
import "../css/Layout.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ArticleHero({ articleName, contentTag }) {
  const [readingList, setReadingList] = useState(false);
  const history = useHistory();

  function handleClick() {
    readingList ? setReadingList(false) : setReadingList(true);
  }

  function articleClicked() {
    console.log("article has been clicked!!");
    history.push("/article");
  }

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
              readingList ? "reading-list-icon-selected" : "reading-list-icon"
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
