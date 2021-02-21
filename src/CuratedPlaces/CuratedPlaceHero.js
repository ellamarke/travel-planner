function CuratedPlaceHero({ curatedPlacesName, heroImageName }) {
  return (
    <div className="hero">
      <h1>{curatedPlacesName}</h1>
      <p className="img-caption">{heroImageName}</p>
      <img
        className="hero-image"
        src="img/grey-rectangle.jpg"
        alt="China"
      ></img>
    </div>
  );
}

export default CuratedPlaceHero;
