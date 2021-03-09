function CuratedPlaceHero({
  curatedPlacesName,
  heroImageName,
  curatedPlacesImage,
}) {
  return (
    <div className="hero">
      <h1>{curatedPlacesName}</h1>
      <p className="img-caption">{heroImageName}</p>
      <img className="hero-image" src={curatedPlacesImage} alt="China"></img>
    </div>
  );
}

export default CuratedPlaceHero;
