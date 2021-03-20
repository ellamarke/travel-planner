function KeyStats({ language, currency, population, place }) {
  const formattedPopulation = new Intl.NumberFormat().format(population);
  return (
    <div className="key-stats">
      <h2 className="language">
        <span className="highlighted" data-cy="population">
          {formattedPopulation}
        </span>{" "}
        people live in {place}.
      </h2>
      <h2 className="language">
        They speak{" "}
        <span className="highlighted" data-cy="language">
          {language}
        </span>
        .
      </h2>
      <h2 className="currency">
        They pay in the{" "}
        <span className="highlighted" data-cy="currency">
          {currency}
        </span>
        .
      </h2>
      <img src="img/globe-peach.svg" alt="" className="globe-icon" />
    </div>
  );
}

export default KeyStats;
