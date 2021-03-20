/// <reference types="cypress" />

context("Save an article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Clicking on article", () => {
    it("should save article under Profile", () => {
      const headingForFrenchArticle = cy.findByText(
        "Paris: Re-Thinking the City of Romance"
      );
      const parent = headingForFrenchArticle.closest(".article-text");
      const button = parent.find("button");
      button.should("have.text", "Save");
      button.click();

      cy.get("[data-cy=profile-nav]").click();
      cy.get("h1").should("contain", "Let's get planning!");

      const myArticles = cy.get("[data-cy=my-articles]");
      myArticles
        .findByText("Paris: Re-Thinking the City of Romance")
        .should("exist");
    });
  });
});
