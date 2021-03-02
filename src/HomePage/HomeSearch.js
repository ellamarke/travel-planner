import "../css/App.css";
import "../css/Layout.css";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Store";

function HomeSearch() {
  const history = useHistory();
  const [state, setState] = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  async function handleClick() {
    console.log(searchTerm);

    const searchedPlace = await doSearch(searchTerm);
    setState({
      ...state,
      currentSearchedPlace: searchedPlace,
    });

    history.push("/searched-place");
  }

  async function doSearch(term) {
    const response = await fetch(`/search-place?searchTerm=${term}`);
    const result = await response.json();
    return result;
  }

  return (
    <div className="home-search">
      <h2>somewhere in mind?</h2>
      <h1>Discover a new country</h1>
      <input
        className="search-bar-main"
        key="search-bar-1"
        placeholder="Japan? Turkey? Morocco?"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      <button className="go" onClick={handleClick}>
        Let's explore!
      </button>
    </div>
  );
}

export default HomeSearch;
