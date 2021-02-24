import "../css/Layout.css";
import "../css/Profile.css";

import React, { useContext } from "react";
import { Context } from "../Store";

function MyArticles({ places, articleIntroduction }) {
  const articleIntroduction =
    "Voluptate id culpa id exercitation deserunt. Do reprehenderit sit velit irure aliqua occaecat occaecat commodo veniam ullamco labore occaecat enim anim. Eiusmod ipsum ullamco ea consectetur anim. Lorem proident reprehenderit ad aliquip cupidatat eiusmod dolore mollit consectetur anim nisi laboris. Consequat pariatur reprehenderit laboris dolor cillum. Voluptate non occaecat et culpa. Labore mollit ullamco est exercitation in.";

  return (
    <div className="place-card-grid">
      <h1>My Articles</h1>
      <p className="my-places-introduction">{articleIntroduction}</p>
      <div className="place-cards">
        {places.map((place) => (
          <ProfileArticleCard
            cardCaption={place.cardCaption}
            cardName={place.cardName}
            key={place.cardName}
          />
        ))}
      </div>
    </div>
  );
}

function ProfileArticleCard({ articleName, authorName, cardName }) {
  const [state, setState] = useContext(Context);
  function handleClick() {
    const favouritePlaces = state.favouritePlaces;
    const newFavouritePlaces = favouritePlaces.filter(
      (place) => place !== cardName
    );
    setState({ ...state, favouritePlaces: newFavouritePlaces });
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
