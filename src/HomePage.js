import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";
import ArticleHero from "./ArticleHero";
import PlaceCarousel from "./PlaceCarousel";

function HomePage() {
  const places = [
    {
      cardName: "Mexico City",
      cardCaption:
        "Velit et incididunt reprehenderit anim duis nisi cillum et tempor est. Commodo voluptate laboris ut anim.",
    },
    {
      cardName: "Phnom Penh",
      cardCaption:
        "Pariatur sunt non proident aliquip. Proident dolore fugiat est nisi sit. Lorem in tempor occaecat irure est ut.",
    },
    {
      cardName: "Lagos",
      cardCaption:
        "Eu officia sit ex dolore quis eu dolor tempor fugiat mollit incididunt excepteur cillum.",
    },
    {
      cardName: "Istanbul",
      cardCaption:
        "In in ut non ullamco consequat sunt proident velit. In laborum duis esse ea proident.",
    },
  ];
  return (
    <div className="home-page">
      <Hero />
      <HomeSearch />
      <WhereNext />
      <ArticleHero articleName="Peru: Our New Obsession" />
      <PlaceCarousel title={"our favourite places"} places={places} />
    </div>
  );
}

export default HomePage;
