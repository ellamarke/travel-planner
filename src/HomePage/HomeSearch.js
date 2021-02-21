import "../css/App.css";
import "../css/Layout.css";

function HomeSearch() {
  function handleClick() {
    console.log("Clicked!"); // Go to search page with event.target
  }

  return (
    <div className="home-search">
      <h2>somewhere in mind?</h2>
      <h1>Where do you want to go next?</h1>
      <input
        className="search-bar-main"
        key="search-bar-1"
        placeholder="Japan? Belgrade? Ethiopia?"
      />
      <button className="go" onClick={handleClick}>
        Let's explore!
      </button>
    </div>
  );
}

export default HomeSearch;
