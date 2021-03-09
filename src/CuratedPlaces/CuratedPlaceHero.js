function CuratedPlaceHero({ placeName, src, placeIntro }) {
  return (
    <div className="place-hero">
      <div className="text-container">
        <h1 className="place-name">{placeName}</h1>
        <div className="text-content">
          <p className="place-intro">{placeIntro}</p>
        </div>
      </div>
      <img src={src} alt={placeName} className="place-hero-image" />
    </div>
  );
}

export default CuratedPlaceHero;
