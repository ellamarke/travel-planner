const fetch = require("node-fetch");

const apiKey = process.env.WEATHER_API_KEY;

exports.getWeather = async function (req, response) {
  const city = req.query.city;

  console.log(`Getting weather for ${city}`);

  const apiResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
  );

  const result = await apiResponse.json();

  response.send(
    JSON.stringify({
      temperature: result.main.temp,
      condition: result.weather[0].main,
    })
  );
};
