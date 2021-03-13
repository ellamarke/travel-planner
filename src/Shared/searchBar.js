import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Store";
import { hardCodedPlaces } from "../Reference/AllPlaces";

function SearchBar() {
  const history = useHistory();
  const [state, setState] = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  async function doSearch(term) {
    const response = await fetch(`/search-place?searchTerm=${term}`);
    const result = await response.json();
    return result;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

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
  };

  return (
    <form
      role="search"
      className="search-bar-container"
      onSubmit={(event) => onSubmit(event)}
    >
      <img src="img/search-icon.svg" alt="search icon"></img>
      <input
        placeholder="Search for a country"
        value={searchTerm}
        onChange={changeSearchTerm}
        className="search-bar-input"
        data-cy="quick-search-bar"
      />
    </form>
  );
}

export default SearchBar;
