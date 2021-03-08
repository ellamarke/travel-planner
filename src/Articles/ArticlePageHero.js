import { useContext } from "react";
import { Context } from "../Store";
import "../css/Article.css";

function ArticlePageHero({ articleName, authorName, contentTag }) {
  const [state, setState] = useContext(Context);
  const myArticles = state.myArticles;

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
    <div className="article-page-hero">
      <h2 className="article-page-title">{articleName}</h2>
      <div className="name__save">
        <h6 className="author-name">{authorName}</h6>
        <button
          className={favourite ? "button saved-button" : "button save-button"}
          onClick={handleClick}
        >
          {favourite ? "Saved!" : "Save"}
          <img src="img/star.svg" alt="save button" />
        </button>
      </div>
    </div>
  );
}

export default ArticlePageHero;
