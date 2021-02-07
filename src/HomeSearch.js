import "./css/App.css";
import "./css/Layout.css";

function HomeSearch() {
  return (
    <div className="home-search">
      <h2>somewhere in mind?</h2>
      <h1>Where do you want to go next?</h1>
      <input
        className="search-bar-main"
        key="search-bar-1"
        placeholder="Japan? Switzerland? Ethiopia?"
      />
    </div>
  );
}

export default HomeSearch;
