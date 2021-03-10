import "../css/App.css";

function KeyStats({ language, currency, population }) {
  const formattedPopulation = new Intl.NumberFormat().format(population);
  return (
    <div className="key-stats">
      <h2 className="language">
        People speak <span className="highlighted">{language}</span>.
      </h2>
      <h2 className="currency">
        They pay in the <span className="highlighted">{currency}</span>.
      </h2>
      <h2 className="language">
        <span className="highlighted">{formattedPopulation}</span> people live
        there.
      </h2>
      <img src="img/globe-peach.svg" alt="" className="globe-icon" />
    </div>
  );
}

export default KeyStats;
