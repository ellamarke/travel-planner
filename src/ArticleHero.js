import "./css/App.css";
import "./css/Layout.css";

function ArticleHero() {
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
            className="reading-list-icon"
            src="img/reading-list-icon.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ArticleHero;
