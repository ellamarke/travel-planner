/// <reference types="cypress" />

context("Search for country", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Navigation from page", () => {
    it("should be able to search for a country", () => {
      cy.get("[data-cy=quick-search-bar]").type("France{enter}");
      cy.get("h1").should("contain", "France");
    });
  });
});
