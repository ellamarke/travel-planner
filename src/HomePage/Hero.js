import "../styles/sitewide.css";

function Hero() {
  /*const bg = document.getElementById("bg");
  const surfers = document.getElementById("surfers");

     window.addEventListener("scroll", function () {
    const value = window.scrollY;
    //  bg.style.top = value + "px";
    surfers.style.top = value * 0.5 + "px";
  }); */
  return (
    <div className="hero-container">
      <div className="hero" id="bg">
        <h1>
          Let's go on
          <br /> an adventure!
        </h1>

        <p className="place-tag">Sydney, Australia</p>

        <img
          src="img/home/surfer-1.png"
          className="hero-image-surfers surfer-4"
          alt="the ocean in sydney, australia"
          id="surfers"
        ></img>

        <img
          src="img/home/surfer-2.png"
          className="hero-image-surfers surfer-1"
          alt="the ocean in sydney, australia"
          id="surfers"
        ></img>

        <img
          src="img/home/surfer-3.png"
          className="hero-image-surfers surfer-2"
          alt="the ocean in sydney, australia"
          id="surfers"
        ></img>

        <img
          src="img/home/surfer-4.png"
          className="hero-image-surfers surfer-3"
          alt="the ocean in sydney, australia"
          id="surfers"
        ></img>

        {/*       <div className="hero-image-container">
        <img
          className="hero-image"
          src="img/home/hero.jpg"
          alt="the ocean in sydney, australia"
        ></img>
      </div> */}
      </div>
    </div>
  );
}

export default Hero;
