import "../css/Place.css";
import React, { useState, useEffect } from "react";

function PlaceHero() {
  return (
    <div className="place-hero">
      <h1>Tokyo, Japan</h1>
      <p className="img-caption">Harajuku</p>
      <Weather city="Tokyo" />
      <img
        className="hero-image"
        src="img/grey-rectangle.jpg"
        alt="Tokyo"
      ></img>
    </div>
  );
}

function Weather({ city }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`/weather?city=${city}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, [city]);

  return (
    <div>
      <div className="weather-box">
        <div className="temp">{Math.round(weather.temperature)}°C</div>
        <div className="weather">{weather.condition}</div>
      </div>
    </div>
  );
}

export default PlaceHero;
