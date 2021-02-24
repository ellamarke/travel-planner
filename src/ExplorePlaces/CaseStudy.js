import "../css/App.css";
import "../css/Layout.css";
import "../css/CuratedPlaces.css";
import React, { useContext } from "react";
import { Context } from "../Store";

function CaseStudy({ cardName, cardCaption, country }) {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  function handleClick() {
    const favourite = !favouritePlaces.includes(cardName);
    if (favourite) {
      favouritePlaces.push(cardName);
      setState({ ...state, favouritePlaces: favouritePlaces });
    } else {
      const newFavouritePlaces = favouritePlaces.filter(
        (place) => place !== cardName
      );
      setState({
        ...state,
        favouritePlaces: newFavouritePlaces,
      });
    }
  }

  const favourite = favouritePlaces.includes(cardName);

  return (
    <div className="case-study-container">
      <h1>Place Spotlight</h1>
      <div className="place-case-study">
        <img
          className="case-study-image"
          src="img/grey-rectangle-small.jpg"
          alt="place"
        ></img>
        <div className="case-study-text">
          <h1 className="place-name">{cardName}</h1>
          <p className="case-study-body">{cardCaption}</p>
          <div className="tags">
            <img
              src="img/heart.png"
              alt="heart button"
              onClick={handleClick}
              className={
                favourite ? "favourite-icon-selected" : "favourite-icon"
              }
            ></img>
            <button className="see-more">See more of {country}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
