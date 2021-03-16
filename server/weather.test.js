const weatherApi = require("./weather");
const fetch = require("node-fetch");

describe("getWeather", () => {
  beforeEach(() => {
    const expectedTemperature = 23.5;
    const expectedCondition = "Cloudy";
    fetch.mockResponseOnce(
      `{"coord":{"lon":139.6917,"lat":35.6895},"weather":[{"id":802,"main":"${expectedCondition}","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":${expectedTemperature},"feels_like":9.04,"temp_min":10.56,"temp_max":11.11,"pressure":1014,"humidity":66},"visibility":10000,"wind":{"speed":1.03,"deg":0},"clouds":{"all":40},"dt":1615829883,"sys":{"type":1,"id":8074,"country":"JP","sunrise":1615841467,"sunset":1615884533},"timezone":32400,"id":1850144,"name":"Tokyo","cod":200}`
    );
  });

  test("will return temperature and condition", async () => {
    const req = {
      query: {
        city: "Japan",
      },
    };
    const res = {
      send: jest.fn(),
    };
    await weatherApi.getWeather(req, res);

    expect(res.send).toBeCalledWith(
      '{"temperature":23.5,"condition":"Cloudy"}'
    );
  });
});
