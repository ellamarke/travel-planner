import "../css/App.css";
import "../css/Profile.css";
import React, { useContext } from "react";
import MyPlaces from "./MyPlaces";
import { Context } from "../Store";
import {
  places,
  temples,
  lakes,
  deserts,
  jungles,
  mountains,
} from "../Reference/AllPlaces";
import MyLists from "../Lists/MyLists";

function Profile() {
  const [state] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  const newPlaces = places.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newTemples = temples.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newLakes = lakes.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newJungles = jungles.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newMountains = mountains.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newDeserts = deserts.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const allPlaces = newPlaces
    .concat(newTemples)
    .concat(newLakes)
    .concat(newJungles)
    .concat(newMountains)
    .concat(newDeserts);

  return (
    <div className="profile">
      <MyPlaces places={allPlaces} />
      <MyLists lists={state.myLists} />
    </div>
  );
}

export default Profile;
