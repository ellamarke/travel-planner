import React, { useContext } from "react";
import { Context } from "../Store";

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
    </div>
  );
}

export default BasicPlacePage;
