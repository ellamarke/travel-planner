import React, { useContext } from "react";
import { Context } from "../Store";
import KeyStats from "./KeyStats";

function BasicPlacePage() {
  const [state] = useContext(Context);
  const { currentSearchedPlace } = state;
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  return (
    <div>
      This is {currentSearchedPlace.placeName}
      <pre>{renderHTML(currentSearchedPlace.content)}</pre>
      {currentSearchedPlace.countryDetails && (
        <KeyStats
          currency={currentSearchedPlace.countryDetails.currency}
          population={currentSearchedPlace.countryDetails.population}
          language={currentSearchedPlace.countryDetails.language}
          flagImage={currentSearchedPlace.countryDetails.flagImage}
        />
      )}
    </div>
  );
}

export default BasicPlacePage;
