import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

function NavBar() {
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
            className="button explore-button"
            data-cy="explore-nav"
          >
            <li>Explore</li>
            <img
              src="img/arrow-up.svg"
              className="arrow-icon"
              alt="arrow icon"
            ></img>
          </Link>

          <Link to="/profile" className="button" data-cy="profile-nav">
            <li>Profile</li>
            <img src="img/star.svg" className="star-icon" alt="star icon"></img>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
