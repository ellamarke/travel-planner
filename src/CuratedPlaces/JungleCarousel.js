import React, { useContext } from "react";
import { Context } from "../Store";

function JungleCarousel({ title, jungles }) {
  return (
    <div className="place-carousel">
      <h3>{title}</h3>
      <div className="card-carousel">
        <div className="cards">
          {jungles
            .map((jungle) => (
              <PlaceCard
                key={jungle.cardName}
                cardCaption={jungle.cardCaption}
                cardName={jungle.cardName}
                alt={jungle.alt}
                src={jungle.src}
              />
            ))
            .filter((jungle, index) => index > 2)}
        </div>
      </div>
    </div>
  );
}

function PlaceCard({ cardName, alt, src }) {
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
    <div className="place-card">
      <img src={src} className="card-image" alt={alt} />
      <div className="card-text">
        <h6 className="card-name">{cardName}</h6>
        <div className="card-buttons">
          <button
            className={
              favourite
                ? "button saved-button small-button"
                : "button save-button small-button"
            }
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img src="img/star.svg" alt="save button" />
          </button>
          <img src="img/arrow-right.svg" className="arrow" alt="arrow button" />
        </div>
      </div>
    </div>
  );
}

export default JungleCarousel;
