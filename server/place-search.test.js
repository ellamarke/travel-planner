const getCountry = require("./place-search");
const fetch = require("node-fetch");

describe("getCountry", () => {
  beforeEach(() => {});

  test("will return country details", async () => {
    fetch.mockResponseOnce(countryLookupExample);
    fetch.mockResponseOnce(wikipediaExample);
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
  test("will return not found if country not found", async () => {
    fetch.mockResponse("Not found", { status: 404 });

    const req = {
      query: {
        searchTerm: "Steve",
      },
    };
    const res = {
      send: jest.fn(),
    };
    await getCountry.getCountry(req, res);

    expect(res.send).toBeCalledWith('{"notFound":true}');
  });
});

test("will return country with biggest population", async () => {
  fetch.mockResponseOnce(multipleCountryLookup);
  fetch.mockResponseOnce(wikipediaExample);
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
    '{"placeName":"Malta","content":"country details","countryDetails":{"flagImage":"https://restcountries.eu/data/ind.svg","currency":"Indian rupee","population":1295210000,"language":"Hindi"}}'
  );
});

test("will capitalise search term for Wikipedia", async () => {
  fetch.mockResponseOnce(countryLookupExample);
  fetch.mockResponseOnce(wikipediaExample);
  const req = {
    query: {
      searchTerm: "uniTeD kingDoM",
    },
  };
  const res = {
    send: jest.fn(),
  };
  await getCountry.getCountry(req, res);

  expect(fetch.mock.calls[1][0]).toEqual(
    "https://en.wikipedia.org/w/api.php?action=query&titles=United Kingdom&prop=extracts&format=json&exintro=1"
  );
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

const multipleCountryLookup = `[{"name":"British Indian Ocean Territory","topLevelDomain":[".io"],"alpha2Code":"IO","alpha3Code":"IOT","callingCodes":["246"],"capital":"Diego Garcia","altSpellings":["IO"],"region":"Africa","subregion":"Eastern Africa","population":3000,"latlng":[-6.0,71.5],"demonym":"Indian","area":60.0,"gini":null,"timezones":["UTC+06:00"],"borders":[],"nativeName":"British Indian Ocean Territory","numericCode":"086","currencies":[{"code":"USD","name":"United States dollar","symbol":"$"}],"languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"de":"Britisches Territorium im Indischen Ozean","es":"Territorio Británico del Océano Índico","fr":"Territoire britannique de l'océan Indien","ja":"イギリス領インド洋地域","it":"Territorio britannico dell'oceano indiano","br":"Território Britânico do Oceano íÍdico","pt":"Território Britânico do Oceano Índico","nl":"Britse Gebieden in de Indische Oceaan","hr":"Britanski Indijskooceanski teritorij","fa":"قلمرو بریتانیا در اقیانوس هند"},"flag":"https://restcountries.eu/data/iot.svg","regionalBlocs":[{"acronym":"AU","name":"African Union","otherAcronyms":[],"otherNames":["الاتحاد الأفريقي","Union africaine","União Africana","Unión Africana","Umoja wa Afrika"]}],"cioc":""},{"name":"India","topLevelDomain":[".in"],"alpha2Code":"IN","alpha3Code":"IND","callingCodes":["91"],"capital":"New Delhi","altSpellings":["IN","Bhārat","Republic of India","Bharat Ganrajya"],"region":"Asia","subregion":"Southern Asia","population":1295210000,"latlng":[20.0,77.0],"demonym":"Indian","area":3287590.0,"gini":33.4,"timezones":["UTC+05:30"],"borders":["AFG","BGD","BTN","MMR","CHN","NPL","PAK","LKA"],"nativeName":"भारत","numericCode":"356","currencies":[{"code":"INR","name":"Indian rupee","symbol":"₹"}],"languages":[{"iso639_1":"hi","iso639_2":"hin","name":"Hindi","nativeName":"हिन्दी"},{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"de":"Indien","es":"India","fr":"Inde","ja":"インド","it":"India","br":"Índia","pt":"Índia","nl":"India","hr":"Indija","fa":"هند"},"flag":"https://restcountries.eu/data/ind.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"IND"}]`;
