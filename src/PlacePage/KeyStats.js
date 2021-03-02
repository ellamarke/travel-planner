import "../css/App.css";

function KeyStats({ language, currency, population }) {
  const formattedPopulation = new Intl.NumberFormat().format(population);
  return (
    <div className="key-stats">
      <h1 className="language">
        People speak <span className="highlighted">{language}</span>.
      </h1>
      <h1 className="currency">
        They pay in the <span className="highlighted">{currency}</span>.
      </h1>
      <h1 className="language">
        <span className="highlighted">{formattedPopulation}</span> people live
        there.
      </h1>
      {/*   <img className="flag">
        <img src={flagImage}></img>
      </img> */}
    </div>
  );
}

export default KeyStats;
