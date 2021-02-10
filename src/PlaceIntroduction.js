import "./css/App.css";

function PlaceIntroduction() {
  return (
    <div className="place-introduction">
      <p className="intro-text">
        Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
        from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto
        Shrine is known for its towering gate and surrounding woods. The
        Imperial Palace sits amid large public gardens. The city's many museums
        offer exhibits ranging from classical art (in the Tokyo National Museum)
        to a reconstructed kabuki theater (in the Edo-Tokyo Museum).
      </p>
      <div className="button-container">
        <button className="read-more">Read more!</button>
      </div>
    </div>
  );
}

export default PlaceIntroduction;
