import "./css/App.css";
import "./css/Profile.css";
import React, { useContext } from "react";
import MyPlaces from "./MyPlaces";
import { Context } from "./Store";
import places from "./AllPlaces";
import MyLists from "./MyLists";
import ListForm from "./ListForm";
import ListItems from "./ListItems";

function Profile() {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  const newPlaces = places.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  return (
    <div className="profile">
      <MyPlaces places={newPlaces} />
      <ListItems />
    </div>
  );
}

export default Profile;
