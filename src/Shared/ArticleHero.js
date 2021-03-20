import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Store";

function ArticleHero({ articleName, authorName, imgSrc }) {
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
        className="drawn-arrow"
        src="img/drawn-elements/arrow-1.svg"
        alt=""
      />
      <div className="article-text">
        <h2 className="article-name" onClick={articleClicked}>
          {articleName}
        </h2>

        <div className="name__button">
          <h5 className="author-name">{authorName}</h5>

          <button
            className={favourite ? "button saved-button" : "button save-button"}
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img src="img/star.svg" alt="save button" />
          </button>
        </div>
      </div>

      <img
        className="article-image"
        src={imgSrc}
        alt="article"
        onClick={articleClicked}
      ></img>
    </div>
  );
}

export default ArticleHero;
