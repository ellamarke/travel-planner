import "../css/App.css";
import "../css/Profile.css";
import React, { useContext, useLayoutEffect } from "react";
import MyPlaces from "./MyPlaces";
import { Context } from "../Store";
import {
  places,
  temples,
  lakes,
  deserts,
  jungles,
  mountains,
  hardCodedPlaces,
  tokyoPlaces,
  istanbulPlaces,
  austriaPlaces,
  indiaPlaces,
  marrakechPlaces,
  mexicoCityPlaces,
  siemReapPlaces,
} from "../Reference/AllPlaces";
import MyLists from "../Lists/MyLists";
import MyArticles from "./MyArticles";
import { articles } from "../Reference/Articles";

function Profile() {
  const [state] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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

  const newHardCodedPlaces = hardCodedPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newTokyoPlaces = tokyoPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newIstanbulPlaces = istanbulPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newAustriaPlaces = austriaPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newIndiaPlaces = indiaPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newMarrakechPlaces = marrakechPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newMexicoCityPlaces = mexicoCityPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const newSiemReapPlaces = siemReapPlaces.filter((place) =>
    favouritePlaces.includes(place.cardName)
  );

  const allPlaces = newPlaces
    .concat(newTemples)
    .concat(newLakes)
    .concat(newJungles)
    .concat(newMountains)
    .concat(newDeserts)
    .concat(newHardCodedPlaces)
    .concat(newTokyoPlaces)
    .concat(newIstanbulPlaces)
    .concat(newAustriaPlaces)
    .concat(newIndiaPlaces)
    .concat(newMarrakechPlaces)
    .concat(newMexicoCityPlaces)
    .concat(newSiemReapPlaces);

  const myArticleNames = state.myArticles;
  const myArticleList = articles.filter((article) =>
    myArticleNames.includes(article.articleName)
  );

  return (
    <div className="profile">
      <MyPlaces places={allPlaces} />
      <MyLists lists={state.myLists} />
      <MyArticles articles={myArticleList} />
    </div>
  );
}

export default Profile;
