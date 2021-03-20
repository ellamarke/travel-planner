function Hero() {
  return (
    <div className="hero-container">
      <div className="hero" id="bg">
        <h1>
          Let&apos;s go on
          <br /> an adventure!
        </h1>

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
