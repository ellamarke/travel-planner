import "../css/Layout.css";
import "../css/Profile.css";

import React, { useContext } from "react";
import { Context } from "../Store";

function MyArticles({ articles }) {
  const articleIntroduction =
    "Voluptate id culpa id exercitation deserunt. Do reprehenderit sit velit irure aliqua occaecat occaecat commodo veniam ullamco labore occaecat enim anim. Eiusmod ipsum ullamco ea consectetur anim. Lorem proident reprehenderit ad aliquip cupidatat eiusmod dolore mollit consectetur anim nisi laboris. Consequat pariatur reprehenderit laboris dolor cillum. Voluptate non occaecat et culpa. Labore mollit ullamco est exercitation in.";

  return (
    <div className="place-card-grid">
      <h1>My Articles</h1>
      <p className="my-places-introduction">{articleIntroduction}</p>
      <div className="place-cards">
        {articles.map((article) => (
          <ProfileArticleCard
            authorName={article.authorName}
            articleName={article.articleName}
            key={article.articleName}
          />
        ))}
      </div>
    </div>
  );
}

function ProfileArticleCard({ articleName, authorName }) {
  const [state, setState] = useContext(Context);
  function handleClick() {
    const myArticles = state.myArticles;
    const newMyArticles = myArticles.filter(
      (article) => article !== articleName
    );
    setState({ ...state, myArticles: newMyArticles });
  }

  return (
    <div className="my-place-card">
      <h1 className="article-name">{articleName}</h1>
      <h2 className="author-name">{authorName}</h2>
      <img
        src="img/heart.png"
        alt="heart button"
        onClick={handleClick}
        className="delete-icon"
      ></img>
    </div>
  );
}

export default MyArticles;
