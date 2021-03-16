const fetch = require("node-fetch");
const api = {
  key: "aff4e10456509422554d2d27827deed3",
  base: "https://api.openweathermap.org/data/2.5/",
};

exports.getWeather = async function (req, response) {
  const city = req.query.city;

  console.log(`Getting weather for ${city}`);

  const apiResponse = await fetch(
    `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`
  );

  const result = await apiResponse.json();

  response.send(
    JSON.stringify({
      temperature: result.main.temp,
      condition: result.weather[0].main,
    })
  );
};
