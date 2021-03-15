const fetch = require("node-fetch");

const weatherApi = require("./weather");
const countryAPI = require("./place-search");

exports.routes = function (app) {
  app.get("/weather", weatherApi.getWeather);

  app.get("/search-place", countryAPI.getCountry);
};
