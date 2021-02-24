import "../css/App.css";
import { useState } from "react";

function PlaceIntroduction({ shortDescription, longDescription }) {
  const [readMore, setReadMore] = useState(false);

  function handleClick() {
    if (readMore === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  }

  return (
    <div className="place-introduction">
      <p className="intro-text">
        {shortDescription}
        <span className={readMore ? "read-more-displayed" : "read-more-hidden"}>
          {longDescription}
        </span>
      </p>
      <div className="button-container">
        <button className="read-more" onClick={handleClick}>
          {readMore ? "Read Less!" : "Read More!"}
        </button>
      </div>
    </div>
  );
}

export default PlaceIntroduction;
