import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";

function MyPlaces({ places }) {
  const history = useHistory();
  function handleClick() {
    history.push("/explore");
  }

  return (
    <div className="place-card-grid">
      <h2>My Places</h2>
      <div className="intro__button">
        <p className="my-places-introduction">
          As you explore, save places that interest you. You can return to them
          here.
        </p>
        <button className="button" onClick={handleClick}>
          Explore more
          <img src="img/arrow-up.svg" alt="" className="arrow-icon" />
        </button>
      </div>
      <div className="place-cards">
        {places.map((place) => (
          <ProfilePlaceCard
            cardCaption={place.cardCaption}
            cardName={place.cardName}
            key={place.cardName}
            src={place.src}
          />
        ))}
        {places.length === 0 && (
          <h3 className="no-content-warning">
            Oops, you haven&apos;t saved any places yet! Explore more places and
            get saving.
          </h3>
        )}
      </div>
    </div>
  );
}

function ProfilePlaceCard({ cardName, src }) {
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
      <img src={src} className="card-image" alt="china" />
      <div className="card-text">
        <h6 className="card-name">{cardName}</h6>
        <div className="card-buttons">
          <button className="delete-button button" onClick={handleClick}>
            delete
          </button>
          <img src="img/arrow-right.svg" className="arrow" alt="arrow button" />
        </div>
      </div>
    </div>
  );
}

export default MyPlaces;
