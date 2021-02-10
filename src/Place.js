import "./css/App.css";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";

function Place() {
  return (
    <div className="place">
      <PlaceHero />
      <PlaceIntroduction />
      <KeyStats />
    </div>
  );
}

export default Place;
