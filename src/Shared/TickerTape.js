import { Fragment } from "react";

function TickerTape({ tickerText }) {
  const fifteen = [...Array(15).keys()];
  return (
    <div className="ticker-parent" data-cy="ticker-tape">
      <div className="ticker-tape">
        <div className="ticker-list" data-testid="ticker-list">
          {fifteen.map((index) => (
            <Fragment key={index}>
              <span>{tickerText}</span>
              <img src="img/star.svg" alt="" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TickerTape;
