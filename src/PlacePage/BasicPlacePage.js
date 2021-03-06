import React, { useContext } from "react";
import { useLayoutEffect } from "react";
import TickerTape from "../Shared/TickerTape";
import { Context } from "../Store";
import KeyStats from "./KeyStats";
import WhereNext from "../HomePage/WhereNext";
import SetPageState from "../Shared/setPageState";

function BasicPlacePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [state] = useContext(Context);
  const { currentSearchedPlace } = state;
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  if (currentSearchedPlace.notFound) {
    return (
      <div className="error-page">
        <h3 className="country-not-found">Country not found!</h3>
        <p className="country-not-found-p">
          Check your spelling and try again.
        </p>
      </div>
    );
  }
  return (
    <div className="basic-place-page">
      <SetPageState pageState="explore" />
      <div className="place-name">
        <h1>{currentSearchedPlace.placeName}</h1>
      </div>
      <TickerTape tickerText={currentSearchedPlace.placeName} />
      <div className="place-introduction page-intro">
        <img src="img/star-peach.svg" alt="" />
        <div className="wiki-text-container">
          <pre className="wiki-text" data-cy="content">
            {renderHTML(currentSearchedPlace.content)}
          </pre>
        </div>
      </div>
      {currentSearchedPlace.countryDetails && (
        <KeyStats
          currency={currentSearchedPlace.countryDetails.currency}
          population={currentSearchedPlace.countryDetails.population}
          language={currentSearchedPlace.countryDetails.language}
          place={currentSearchedPlace.placeName}
        />
      )}

      <WhereNext title="Want to discover more?" />
    </div>
  );
}

export default BasicPlacePage;
