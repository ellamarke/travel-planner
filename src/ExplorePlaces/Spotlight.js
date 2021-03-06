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
      <img className="spotlight-image" src={src} alt={alt}></img>
      <div className="spotlight-text">
        <h5>Place Spotlight.</h5>
        <h6 className="place-name">{cardName}</h6>
        <p className="case-study-body">{cardCaption}</p>
        <div className="buttons">
          <button
            className={favourite ? "button saved-button" : "button save-button"}
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img
              src={favourite ? "img/star-thick.svg" : "img/star-grey-thick.svg"}
              alt="save button"
            />
          </button>
          <button className="see-more-button button">
            See more of {country}
            <img src="img/arrow-up-grey.svg" alt="see more button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
