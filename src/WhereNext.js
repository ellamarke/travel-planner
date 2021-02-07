import "./css/App.css";
import "./css/Layout.css";

function WhereNext() {
  return (
    <div className="where-next">
      <h1>I want to see</h1>
      <div className="place-dropdown">
        <button className="dropdown-button">
          <h1>Great Lakes</h1>
        </button>
        <div className="dropdown-content">
          <a href="#">Misty Mountains</a>
          <a href="#">Crumbling Temples</a>
          <a href="#">Dark Jungles</a>
          <a href="#">Desert Cities</a>
        </div>
      </div>
      <button className="go">Let's explore!</button>
    </div>
  );
}

export default WhereNext;
