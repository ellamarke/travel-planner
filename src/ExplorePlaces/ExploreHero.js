import "../styles/sitewide.css";

function ExploreHero() {
  return (
    <div className="hero-container">
      <div className="hero explore-hero">
        {/*  <img
          src="img/explore/hero-overlay.png"
          alt=""
          className="hero-overlay"
        /> */}
        <h1>
          Discover
          <br /> somewhere
          <br /> new!
        </h1>

        <p className="place-tag">Iceland</p>
      </div>
    </div>
  );
}

export default ExploreHero;
