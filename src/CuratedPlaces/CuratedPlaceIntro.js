function CuratedPlaceIntro({ introText, introTitle }) {
  return (
    <div className="page-intro">
      <h1 className="intro-title">{introTitle}</h1>
      <p className="intro-text">{introText}</p>
      <img src="img/star-peach.svg" alt="" />
    </div>
  );
}

export default CuratedPlaceIntro;
