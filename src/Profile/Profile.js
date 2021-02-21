import "../css/App.css";
import "../css/Profile.css";
import React, { useContext } from "react";
import MyPlaces from "./MyPlaces";
import { Context } from "../Store";
import places from "../Reference/AllPlaces";
import MyLists from "../Lists/MyLists";

function Profile() {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  const newPlaces = places.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  return (
    <div className="profile">
      <MyPlaces places={newPlaces} />
      <MyLists lists={state.myLists} />
    </div>
  );
}

export default Profile;
