import "../css/App.css";
import "../css/Profile.css";
import React, { useContext } from "react";
import MyPlaces from "./MyPlaces";
import { Context } from "../Store";
import { places, temples } from "../Reference/AllPlaces";
import MyLists from "../Lists/MyLists";

function Profile() {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  const newPlaces = places.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newTemples = temples.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const allPlaces = newPlaces.concat(newTemples);

  return (
    <div className="profile">
      <MyPlaces places={allPlaces} />
      <MyLists lists={state.myLists} />
    </div>
  );
}

export default Profile;
