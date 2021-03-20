const getCountry = require("./place-search");
const fetch = require("node-fetch");

describe("getCountry", () => {
  beforeEach(() => {
    fetch.mockResponseOnce(wikipediaExample);
    fetch.mockResponseOnce(countryLookupExample);
  });

  test("will return country details", async () => {
    const req = {
      query: {
        searchTerm: "Malta",
      },
    };
    const res = {
      send: jest.fn(),
    };
    await getCountry.getCountry(req, res);

    expect(res.send).toBeCalledWith(
      '{"placeName":"Malta","content":"country details","countryDetails":{"flagImage":"https://restcountries.eu/data/mlt.svg","currency":"Euro","population":425384,"language":"Maltese"}}'
    );
  });
});

const wikipediaExample = `{
  "batchcomplete": "",
  "warnings": {
    "extracts": {
      "*": "HTML may be malformed and/or unbalanced and may omit inline images. Use at your own risk. Known problems are listed at https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TextExtracts#Caveats."
    }
  },
  "query": {
    "normalized": [
      {
        "from": "malta",
        "to": "Malta"
      }
    ],
    "pages": {
      "19137": {
        "pageid": 19137,
        "ns": 0,
        "title": "Malta",
        "extract": "country details"
      }
    }
  }
}`;

const countryLookupExample = `[
  {
    "name": "Malta",
    "topLevelDomain": [
      ".mt"
    ],
    "alpha2Code": "MT",
    "alpha3Code": "MLT",
    "callingCodes": [
      "356"
    ],
    "capital": "Valletta",
    "altSpellings": [
      "MT",
      "Republic of Malta",
      "Repubblika ta' Malta"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 425384,
    "latlng": [
      35.83333333,
      14.58333333
    ],
    "demonym": "Maltese",
    "area": 316.0,
    "gini": null,
    "timezones": [
      "UTC+01:00"
    ],
    "borders": [
      
    ],
    "nativeName": "Malta",
    "numericCode": "470",
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "mt",
        "iso639_2": "mlt",
        "name": "Maltese",
        "nativeName": "Malti"
      },
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }
    ],
    "translations": {
      "de": "Malta",
      "es": "Malta",
      "fr": "Malte",
      "ja": "マルタ",
      "it": "Malta",
      "br": "Malta",
      "pt": "Malta",
      "nl": "Malta",
      "hr": "Malta",
      "fa": "مالت"
    },
    "flag": "https://restcountries.eu/data/mlt.svg",
    "regionalBlocs": [
      {
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [
          
        ],
        "otherNames": [
          
        ]
      }
    ],
    "cioc": "MLT"
  }
]`;
