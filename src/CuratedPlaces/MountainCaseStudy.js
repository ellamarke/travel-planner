import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";

function MountainCaseStudy({ mountain }) {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;
  const { cardName, cardCaption, country, src, alt } = mountain;
  const history = useHistory();

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

  async function doSearch(country) {
    const response = await fetch(`/search-place?searchTerm=${country}`);
    const result = await response.json();
    return result;
  }

  const goToCountry = async () => {
    const searchedPlace = await doSearch(country);
    setState({
      ...state,
      currentSearchedPlace: searchedPlace,
    });

    history.push("/searched-place");
  };

  return (
    <div className="spotlight-container">
      <img className="spotlight-image" src={src} alt={alt}></img>
      <div className="spotlight-text">
        <h6 className="place-name">{cardName}</h6>
        <p className="case-study-body">{cardCaption}</p>
        <div className="buttons">
          <button
            className={favourite ? "button saved-button" : "button save-button"}
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img src="img/star-thick.svg" alt="save button" />
          </button>
          <button className="see-more-button button" onClick={goToCountry}>
            See more of {country}
            <img src="img/arrow-up.svg" alt="see more button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MountainCaseStudy;
