/// <reference types="cypress" />

context("Search for country", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "GET",
      `http://localhost:3000/search-place?searchTerm=France`,
      {
        statusCode: 200,
        body:
          '{"placeName":"France","content":"details about france","countryDetails":{"flagImage":"https://restcountries.eu/data/fra.svg","currency":"Euro","population":66710000,"language":"French"}}',
      }
    );
    cy.get("[data-cy=quick-search-bar]").type("France{enter}");
  });

  describe("Navigation from page", () => {
    it("should be able to search for a country", () => {
      cy.get("h1").should("contain", "France");
    });
    it("has the correct population", () => {
      cy.get("[data-cy=population]").should("contain", "66,710,000");
    });
    it("has the correct currency", () => {
      cy.get("[data-cy=currency]").should("contain", "Euro");
    });
    it("has the correct language", () => {
      cy.get("[data-cy=language]").should("contain", "French");
    });
    it("has the correct content", () => {
      cy.get("[data-cy=content]").should("contain", "details about france");
    });
  });
});
