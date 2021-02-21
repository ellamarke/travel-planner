import "../css/App.css";
import "../css/Layout.css";
import React, { useState, useContext } from "react";

function PlaceCaseStudy({ articleName }) {
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

  return (
    <div className="place-case-study">
      <img
        className="case-study-image"
        src="img/grey-rectangle-small.jpg"
        alt="place"
      ></img>
      <div className="case-study-text">
        <h1 className="place-name">Cambodia's Shining Star</h1>
        <p className="case-study-body">
          Elit amet irure aliquip id et anim ut. Elit elit minim elit irure
          eiusmod mollit tempor. Aliquip culpa consequat amet qui aliquip qui.
          Anim nostrud voluptate Lorem est sint Lorem mollit et sunt excepteur
          nisi velit laborum. Do duis eu nisi quis elit. Proident cillum est sit
          elit culpa.
        </p>
        <div className="tags">
          <img
            src="img/heart.png"
            alt="heart button"
            onClick={handleClick}
            className={favourite ? "favourite-icon-selected" : "favourite-icon"}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PlaceCaseStudy;
