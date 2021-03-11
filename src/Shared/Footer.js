import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="logo__links">
        <img src="img/logo-text-only.svg" alt="voyage logo" className="logo" />
        <ul className="links">
          <li className="link">
            <Link to="/">
              <h6>Home</h6>
            </Link>
          </li>
          <li className="link">
            <Link to="/explore">
              <h6>Explore</h6>
            </Link>
          </li>
          <li className="link">
            <Link to="/profile">
              <h6>Profile</h6>
            </Link>
          </li>
        </ul>
      </div>
      <img src="img/logo-img-only.svg" alt="voyage logo" className="globe" />
    </footer>
  );
}

export default Footer;
