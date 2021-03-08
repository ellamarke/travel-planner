import React, { useLayoutEffect } from "react";

function ArticlePageContent({ imgSrc, imgSrc2, alt }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="article-page-content">
      <div className="text__image-left">
        <div className="p-content content-left">
          <p>
            Fugiat fugiat nulla et esse officia dolor deserunt ullamco
            consequat. Laborum eiusmod ullamco voluptate voluptate magna
            adipisicing laborum sunt magna duis culpa eu enim amet. Sunt mollit
            et in in consequat officia id labore velit esse in. Ullamco non
            deserunt mollit nulla.
          </p>
          <p>
            Id in cillum mollit dolor ex commodo anim eiusmod ea quis non
            labore. Sint duis esse elit in voluptate nisi aliquip amet
            consectetur qui. Excepteur reprehenderit eiusmod consectetur veniam
            ullamco anim incididunt consequat ipsum eiusmod. Aliquip elit nulla
            labore laboris ea ex proident eu et eiusmod esse in elit nulla. Duis
            laboris laboris magna deserunt ad. Et sunt reprehenderit commodo et.
          </p>
          <p>
            Enim ea aliquip duis duis qui nulla. Cillum nostrud nulla culpa amet
            ad esse. Occaecat consequat quis officia deserunt veniam. Sunt eu
            qui cillum mollit proident proident sit tempor occaecat. Et sint do
            minim quis aute quis non culpa consectetur adipisicing adipisicing
            duis. Ex dolor mollit et enim exercitation.
          </p>
        </div>
        <img src={imgSrc} alt={alt} className="article-image" />
      </div>
      <div className="text__image-right">
        <img src={imgSrc2} alt={alt} className="article-image" />
        <div className="p-content content-right">
          <p>
            Fugiat fugiat nulla et esse officia dolor deserunt ullamco
            consequat. Laborum eiusmod ullamco voluptate voluptate magna
            adipisicing laborum sunt magna duis culpa eu enim amet. Sunt mollit
            et in in consequat officia id labore velit esse in. Ullamco non
            deserunt mollit nulla.
          </p>
          <p>
            Id in cillum mollit dolor ex commodo anim eiusmod ea quis non
            labore. Sint duis esse elit in voluptate nisi aliquip amet
            consectetur qui. Excepteur reprehenderit eiusmod consectetur veniam
            ullamco anim incididunt consequat ipsum eiusmod. Aliquip elit nulla
            labore laboris ea ex proident eu et eiusmod esse in elit nulla. Duis
            laboris laboris magna deserunt ad. Et sunt reprehenderit commodo et
            consequat esse commodo sit. Do cillum nostrud est anim in excepteur
            incididunt enim.
          </p>
          <p>
            Enim ea aliquip duis duis qui nulla. Cillum nostrud nulla culpa amet
            ad esse. Occaecat consequat quis officia deserunt veniam. Sunt eu
            qui cillum mollit proident proident sit tempor occaecat. Et sint do
            minim quis aute quis non culpa consectetur adipisicing adipisicing
            duis. Ex dolor mollit et enim exercitation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePageContent;
