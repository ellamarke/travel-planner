function PageIntro({ pageIntroContent }) {
  return (
    <div className="page-intro">
      <p className="main-p">{pageIntroContent}</p>
      <img src="img/star-peach.svg" alt="" />
    </div>
  );
}

export default PageIntro;
