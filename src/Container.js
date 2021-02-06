import "./css/App.css";
import HomeSearch from "./HomeSearch";
import Hero from "./Hero";
import WhereNext from "./WhereNext";

function Container() {
  return (
    <div className="container">
      <Hero />
      <HomeSearch />
      <WhereNext />
    </div>
  );
}

export default Container;
