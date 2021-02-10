import "./css/App.css";

function KeyStats() {
  return (
    <div className="key-stats">
      <h1 className="language">
        People speak <span className="highlighted">Japanese</span>.
      </h1>
      <h1 className="currency">
        They pay in <span className="highlighted">Yen</span>.
      </h1>
      <h1 className="language">
        <span className="highlighted">9.2 million</span> people live there.
      </h1>
    </div>
  );
}

export default KeyStats;
