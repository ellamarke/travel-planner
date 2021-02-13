import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function ArticleHero({ articleName }) {
  const [readingList, setReadingList] = useState(false);

  function handleClick() {
    readingList ? setReadingList(false) : setReadingList(true);
  }

  return (
    <div className="article-hero">
      <img
        className="article-image"
        src="img/grey-rectangle-small.jpg"
        alt="article"
      ></img>
      <div className="article-text">
        <h1 className="article-name">{articleName}</h1>
        <div className="tags">
          <p className="content-tag">Culture</p>
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
