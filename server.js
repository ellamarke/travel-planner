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

app.listen(8080);
