import "./css/Place.css";
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
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 429) {
          console.log("we have exceeded the number of requests " + result);
          setWeather({});
        } else {
          setWeather(result);
        }
      });
  }, []);

  const api = {
    key: "aff4e10456509422554d2d27827deed3",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      ) : (
        <div className="weather-box">
          Sorry, can't display weather right now
        </div>
      )}
    </div>
  );
}

export default PlaceHero;
