const express = require("express");
const app = express();
const fetch = require("node-fetch");

const api = {
  key: "aff4e10456509422554d2d27827deed3",
  base: "https://api.openweathermap.org/data/2.5/",
};

app.get("/weather", (req, response) => {
  const city = req.query.city;
  console.log(`Getting weather for ${city}`);
  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      response.send(
        JSON.stringify({
          temperature: result.main.temp,
          condition: result.weather[0].main,
        })
      );
    });
});

app.get("/search-place", async (req, response) => {
  const searchTerm = req.query.searchTerm;

  const wikipediaPlace = await wikipediaSearch(searchTerm);

  const restCountry = await countrySearch(searchTerm);

  const details = { ...wikipediaPlace, countryDetails: restCountry };

  console.log(details);

  response.send(JSON.stringify(details));
});

console.log(`I've started!!`);

app.listen(8080);

async function wikipediaSearch(searchTerm) {
  const apiResponse = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&titles=${searchTerm}&prop=extracts&format=json&exintro=1`
  );

  const result = await apiResponse.json();
  const pages = result.query.pages;
  const keys = Object.keys(pages);
  const firstPageKey = keys[0];
  const place = {
    placeName: result.query.normalized[0].to,
    content: pages[firstPageKey].extract,
  };

  return place;
}

async function countrySearch(searchTerm) {
  const apiResponse = await fetch(
    `https://restcountries.eu/rest/v2/name/${searchTerm}`
  );

  const result = await apiResponse.json();

  console.log(result);

  if (result.status === 404) {
    return null;
  }

  const country = result[0];

  return {
    flagImage: country.flag,
    currency: country.currencies[0].name,
    population: country.population,
    language: country.languages[0].name,
  };
}
