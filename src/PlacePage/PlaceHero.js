import React, { useState, useEffect } from "react";

function PlaceHero({ placeName, weatherCityName, src, placeIntro }) {
  return (
    <div className="place-hero">
      <div className="text-container">
        <h1 className="place-name">{placeName}</h1>
        <div className="text-content">
          <p className="place-intro">{placeIntro}</p>
          <table className="weather-block">
            <tbody>
              <tr>
                <td>
                  <p className="currently">currently</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Weather city={weatherCityName} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img src={src} alt={placeName} className="place-hero-image" />
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
        <div className="temp">
          {Math.round(weather.temperature)}°C, {weather.condition}
        </div>
      </div>
    </div>
  );
}

export default PlaceHero;
