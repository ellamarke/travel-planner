import "../css/WhereNext.css";
import "../css/Layout.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function WhereNext({ title }) {
  const places = [
    { placeTitle: "Great Lakes", route: "/lakes" },
    { placeTitle: "Misty Mountains", route: "/mountains" },
    { placeTitle: "Crumbling Temples", route: "/temples" },
    { placeTitle: "Dark Jungles", route: "/jungles" },
    { placeTitle: "Desert Cities", route: "/deserts" },
  ];

  const [place, setPlace] = useState(places[0]);

  const history = useHistory();

  function handleClick() {
    history.push(place.route);
  }

  return (
    <div className="where-next">
      <h3>{title}</h3>

      <div className="dropdown-sentence">
        <h4>I want to see</h4>

        <div className="dd-wrapper">
          <div className="dd-header">
            <button className="dd-header-title">
              <h4>{place.placeTitle}</h4>
            </button>
          </div>

          <div className="dd-list">
            <ul>
              {places
                .filter(
                  (placeInList) => place.placeTitle !== placeInList.placeTitle
                )
                .map((placeInList) => (
                  <li
                    key={placeInList.placeTitle}
                    onClick={() => setPlace(placeInList)}
                  >
                    {placeInList.placeTitle}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <button className="button" onClick={handleClick}>
        Let's explore!
        <img
          src="img/arrow-up.svg"
          className="arrow-icon"
          alt="arrow icon"
        ></img>
      </button>
    </div>
  );
}

export default WhereNext;
