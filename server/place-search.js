const fetch = require("node-fetch");

exports.getCountry = async function (req, response) {
  const searchTerm = req.query.searchTerm;

  const wikipediaPlace = await wikipediaSearch(searchTerm);

  const restCountry = await countrySearch(searchTerm);

  const details = { ...wikipediaPlace, countryDetails: restCountry };

  console.log(details);

  response.send(JSON.stringify(details));
};

async function wikipediaSearch(searchTerm) {
  const apiResponse = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&titles=${searchTerm.toLowerCase()}&prop=extracts&format=json&exintro=1`
  );

  const result = await apiResponse.json();
  console.log(JSON.stringify(result));
  const pages = result.query.pages;
  const keys = Object.keys(pages);
  const firstPageKey = keys[0];
  const place = {
    placeName: result?.query?.normalized[0]?.to || searchTerm,
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
