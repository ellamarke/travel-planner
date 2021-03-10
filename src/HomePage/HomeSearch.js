import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Store";
import { hardCodedPlaces } from "../Reference/AllPlaces";

function HomeSearch() {
  const history = useHistory();
  const [state, setState] = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  async function handleClick() {
    const place = hardCodedPlaces.find(
      (place) => place.searchWord.toLowerCase() === searchTerm.toLowerCase()
    );

    if (place) {
      history.push(place.route);
    } else {
      const searchedPlace = await doSearch(searchTerm);
      setState({
        ...state,
        currentSearchedPlace: searchedPlace,
      });

      history.push("/searched-place");
    }
  }

  async function doSearch(term) {
    const response = await fetch(`/search-place?searchTerm=${term}`);
    const result = await response.json();
    return result;
  }

  return (
    <div className="home-search">
      <h3>Search for a country.</h3>
      <div className="search-bar-container">
        <div className="colour-bar">
          <img src="img/search-icon-light.svg" alt="search icon" />
          <input
            className="search-bar-main"
            key="search-bar-1"
            placeholder="Japan? Turkey? Morocco?"
            value={searchTerm}
            onChange={changeSearchTerm}
          />
        </div>
      </div>
      <button className="button" onClick={handleClick}>
        Let's explore!
        <img
          src="img/arrow-up.svg"
          className="arrow-icon"
          alt="arrow icon"
        ></img>
      </button>
    </div>
  );
}

export default HomeSearch;
