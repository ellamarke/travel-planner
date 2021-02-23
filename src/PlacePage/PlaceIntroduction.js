import "../css/App.css";
import { useState } from "react";

function PlaceIntroduction() {
  const [readMore, setReadMore] = useState(false);

  function handleClick() {
    if (readMore === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  }

  return (
    <div className="place-introduction">
      <p className="intro-text">
        Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
        from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto
        Shrine is known for its towering gate and surrounding woods. The
        Imperial Palace sits amid large public gardens. The city's many museums
        offer exhibits ranging from classical art (in the Tokyo National Museum)
        to a reconstructed kabuki theater (in the Edo-Tokyo Museum).
        <span className={readMore ? "read-more-displayed" : "read-more-hidden"}>
          Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous
          metropolis. It is also one of Japan's 47 prefectures, consisting of 23
          central city wards and multiple cities, towns and villages west of the
          city center. The Izu and Ogasawara Islands are also part of Tokyo.
          Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th
          century, Edo became Japan's political center in 1603 when Tokugawa
          Ieyasu established his feudal government there.
          <br />A few decades later, Edo had grown into one of the world's most
          populous cities. With the Meiji Restoration of 1868, the emperor and
          capital moved from Kyoto to Edo, which was renamed Tokyo ("Eastern
          Capital"). Large parts of Tokyo were destroyed in the Great Kanto
          Earthquake of 1923 and in the air raids of 1945. Today, Tokyo offers a
          seemingly unlimited choice of shopping, entertainment, culture and
          dining to its visitors. The city's history can be appreciated in
          districts such as Asakusa and in many excellent museums, historic
          temples and gardens. Contrary to common perception, Tokyo also offers
          a number of attractive green spaces in the city center and within
          relatively short train rides at its outskirts.
        </span>
      </p>
      <div className="button-container">
        <button className="read-more" onClick={handleClick}>
          {readMore ? "Read Less!" : "Read More!"}
        </button>
      </div>
    </div>
  );
}

export default PlaceIntroduction;
