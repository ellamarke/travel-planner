import "./css/App.css";
import React, { useState } from "react";

function PlaceHero() {
  return (
    <div className="place-hero">
      <h1>Tokyo, Japan</h1>
      <p className="img-caption">Harajuku</p>
      <Weather />
      <img className="hero-image" src="img/grey-rectangle.jpg"></img>
    </div>
  );
}

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const api = {
    key: "aff4e10456509422554d2d27827deed3",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  return (
    <div>
      <h1>WEATHER</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      {typeof weather.main != "undefined" ? (
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PlaceHero;
