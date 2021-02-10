import "./css/WhereNext.css";
import "./css/Layout.css";
import React, { useState } from "react";

export function WhereNext() {
  const [placeTitle, setPlaceTitle] = useState("Great Lakes");
  const places = [
    "Great Lakes",
    "Misty Mountains",
    "Crumbling Temples",
    "Dark Jungles",
    "Desert Cities",
  ];

  function handleClick() {
    console.log("clicked!"); // go to page with the name of the selected placeTitle state
  }

  return (
    <div className="where-next">
      <h2>Find somewhere new</h2>

      <div className="dropdown-sentence">
        <h1>I want to see</h1>

        <div className="dd-wrapper">
          <div className="dd-header">
            <button className="dd-header-title">
              <h1>{placeTitle}</h1>
            </button>
          </div>

          <div className="dd-list">
            <ul>
              {places
                .filter((place) => place != placeTitle)
                .map((place) => (
                  <li onClick={() => setPlaceTitle(place)}>{place}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <button className="go" onClick={handleClick}>
        Let's explore!
      </button>
    </div>
  );
}

export default WhereNext;
