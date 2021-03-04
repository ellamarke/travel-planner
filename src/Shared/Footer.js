import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="logo__links">
        <img src="img/logo-text-only.svg" alt="voyage logo" className="logo" />
        <ul className="links">
          <Link to="/">
            <li className="link">
              <h6>Home</h6>
            </li>
          </Link>
          <Link to="/explore">
            <li className="link">
              <h6>Explore</h6>
            </li>
          </Link>
          <Link to="/profile">
            <li className="link">
              <h6>Profile</h6>
            </li>
          </Link>
        </ul>
      </div>
      <img src="img/logo-img-only.svg" alt="voyage logo" className="globe" />
    </footer>
  );
}

export default Footer;
