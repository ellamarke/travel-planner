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
    <div className="place-introduction page-intro">
      <img src="img/star-peach.svg" alt="" />
      <div className="intro-text-place">
        <div className="short-description">
          <div className="descriptions short-description">
            {shortDescription}
          </div>
        </div>
        <span className={readMore ? "read-more-displayed" : "read-more-hidden"}>
          <div className="descriptions long-description">{longDescription}</div>
        </span>
      </div>
      <div className="button-container">
        <button className="read-more button" onClick={handleClick}>
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default PlaceIntroduction;
