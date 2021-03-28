import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

function NavBar({ pageState }) {
  return (
    <nav>
      <ul className="nav-container">
        <div className="logo-search">
          <Link to="/" className="logo">
            <img src="img/logo.svg" alt="voyage logo"></img>
          </Link>

          <SearchBar className="nav-search-bar" />
        </div>

        <div className="nav-links">
          <Link
            to="/explore"
            className={`button ${
              pageState === "explore"
                ? "explore-button-selected"
                : "explore-button"
            }`}
            data-cy="explore-nav"
          >
            <li>Explore</li>
            <img
              src={
                pageState === "explore"
                  ? "img/arrow-up-grey.svg"
                  : "img/arrow-up.svg"
              }
              className="arrow-icon"
              alt="arrow icon"
            ></img>
          </Link>

          <Link
            to="/profile"
            className={`button ${
              pageState === "profile"
                ? "profile-button-selected"
                : "profile-button"
            }`}
            data-cy="profile-nav"
          >
            <li>Profile</li>
            <img
              src={
                pageState === "profile" ? "img/star-grey.svg" : "img/star.svg"
              }
              className="star-icon"
              alt="star icon"
            ></img>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
