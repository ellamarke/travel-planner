import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Store";

function Spotlight({ cardName, cardCaption, country, src, alt }) {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;
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
          <button className="see-more-button button" onClick={goToCountry}>
            See more of {country}
            <img src="img/arrow-up-grey.svg" alt="see more button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
