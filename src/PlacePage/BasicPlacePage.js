import React, { useContext } from "react";
import { useLayoutEffect } from "react";
import TickerTape from "../Shared/TickerTape";
import { Context } from "../Store";
import KeyStats from "./KeyStats";
import WhereNext from "../HomePage/WhereNext";

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
  return (
    <div className="basic-place-page">
      <div className="place-name">
        <h1>{currentSearchedPlace.placeName}</h1>
      </div>
      <TickerTape tickerText={currentSearchedPlace.placeName} />
      <div className="place-introduction page-intro">
        <img src="img/star-peach.svg" alt="" />
        <div className="wiki-text-container">
          <pre className="wiki-text">
            {renderHTML(currentSearchedPlace.content)}
          </pre>
        </div>
      </div>
      {currentSearchedPlace.countryDetails && (
        <KeyStats
          currency={currentSearchedPlace.countryDetails.currency}
          population={currentSearchedPlace.countryDetails.population}
          language={currentSearchedPlace.countryDetails.language}
          flagImage={currentSearchedPlace.countryDetails.flagImage}
        />
      )}

      <WhereNext title="Want to discover more?" />
    </div>
  );
}

export default BasicPlacePage;
