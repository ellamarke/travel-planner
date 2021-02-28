import "../css/App.css";

function KeyStats({ language, currency, population }) {
  return (
    <div className="key-stats">
      <h1 className="language">
        People speak <span className="highlighted">{language}</span>.
      </h1>
      <h1 className="currency">
        They pay in <span className="highlighted">{currency}</span>.
      </h1>
      <h1 className="language">
        <span className="highlighted">{population}</span> people live there.
      </h1>
      {/*   <img className="flag">
        <img src={flagImage}></img>
      </img> */}
    </div>
  );
}

export default KeyStats;
