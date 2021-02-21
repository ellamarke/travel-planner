import "../css/App.css";

function CuratedPlaceIntro({ introText }) {
  return (
    <div className="place-introduction">
      <p className="intro-text">{introText}</p>
    </div>
  );
}

export default CuratedPlaceIntro;
