import React, { useContext } from "react";
import { Context } from "../Store";

function Spotlight({ cardName, cardCaption, country, src, alt }) {
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
    <div className="spotlight-container">
      <h5>Place Spotlight.</h5>
      <div className="place-case-study">
        <img className="case-study-image" src={src} alt={alt}></img>
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

export default Spotlight;
