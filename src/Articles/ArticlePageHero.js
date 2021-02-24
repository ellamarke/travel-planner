import { useState, useContext } from "react";
import { Context } from "../Store";
import "../css/Article.css";

function ArticlePageHero({ articleName, authorName, contentTag }) {
  const [state, setState] = useContext(Context);
  const [readingList, setReadingList] = useState(false);
  const favouriteArticles = state.favouriteArticles;

  function handleClick() {
    readingList ? setReadingList(false) : setReadingList(true);
  }

  function handleClick() {
    const favourite = !favouriteArticles.includes(articleName);
    if (favourite) {
      favouriteArticles.push(articleName);
      setState({ ...state, favouriteArticles: favouriteArticles });
    } else {
      const newFavouriteArticles = favouriteArticles.filter(
        (article) => article !== articleName
      );
      setState({
        ...state,
        favouriteArticles: newFavouriteArticles,
      });
    }
  }

  return (
    <div className="article-page-hero">
      <h1 className="article-page-title">{articleName}</h1>
      <h2 className="author-name">{authorName}</h2>
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
  );
}

export default ArticlePageHero;
