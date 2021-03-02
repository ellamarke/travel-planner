/* import "../css/App.css";
import "../css/Layout.css";
import "../css/NavBar.css"; */
import "../styles/sitewide.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/tokyo">
          <li>Tokyo</li>
        </Link>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
