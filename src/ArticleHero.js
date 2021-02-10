import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function ArticleHero() {
  const [readingList, setReadingList] = useState(false);

  function handleClick() {
    readingList ? setReadingList(false) : setReadingList(true);
  }

  return (
    <div className="article-hero">
      <img className="article-image" src="img/grey-rectangle-small.jpg"></img>
      <div className="article-text">
        <h1 className="article-name">
          Peru:
          <br /> Our New Obsession
        </h1>
        <div className="tags">
          <p className="content-tag">Culture</p>
          <img
            onClick={handleClick}
            className={
              readingList ? "reading-list-icon-selected" : "reading-list-icon"
            }
            src="img/reading-list-icon.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ArticleHero;
