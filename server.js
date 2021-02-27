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

  const apiResponse = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&titles=${searchTerm}&prop=extracts&format=json&exintro=1`
  );

  const result = await apiResponse.json();
  console.log(result);
  const pages = result.query.pages;
  const keys = Object.keys(pages);
  const firstPageKey = keys[0];
  const place = JSON.stringify({
    placeName: result.query.normalized[0].to,
    content: pages[firstPageKey].extract,
  });

  response.send(place);
});

console.log(`I've started!!`);

app.listen(8080);
