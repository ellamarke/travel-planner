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
      <div className="intro-text">
        <div className="short-description">
          <p>{shortDescription}</p>
        </div>
        <span className={readMore ? "read-more-displayed" : "read-more-hidden"}>
          <p>{longDescription}</p>
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
