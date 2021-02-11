import "./css/App.css";
import PlaceHero from "./PlaceHero";
import PlaceIntroduction from "./PlaceIntroduction";
import KeyStats from "./KeyStats";
import PlaceCarousel from "./PlaceCarousel";
import ArticleHero from "./ArticleHero";

function Place() {
  const places = [
    {
      cardName: "Beijing",
      cardCaption:
        "Commodo voluptate laboris ut anim. Labore consectetur cillum proident Lorem ex Lorem dolor.",
    },
    {
      cardName: "Belgrade",
      cardCaption:
        "Excepteur ipsum ipsum laboris quis do tempor dolor occaecat.",
    },
    {
      cardName: "Denver",
      cardCaption:
        "Velit et incididunt reprehenderit anim duis nisi cillum et tempor est. Commodo voluptate laboris ut anim.",
    },
    {
      cardName: "Bali",
      cardCaption:
        "Sit cupidatat exercitation do esse quis culpa anim duis nisi cillum et tempor est.",
    },
  ];
  return (
    <div className="place">
      <PlaceHero />
      <PlaceIntroduction />
      <KeyStats />
      <PlaceCarousel title={"some cool places"} places={places} />
      <ArticleHero articleName="Tokyo's cultural hotspots just got a major boost" />
    </div>
  );
}

export default Place;
