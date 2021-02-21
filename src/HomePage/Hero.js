import "../css/App.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Finding your next adventure</h1>
      <p className="img-caption">Beijing, China</p>
      <img
        className="hero-image"
        src="img/grey-rectangle.jpg"
        alt="China"
      ></img>
    </div>
  );
}

export default Hero;
