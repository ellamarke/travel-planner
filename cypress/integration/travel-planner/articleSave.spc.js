/// <reference types="cypress" />

context("Save an Article", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Elements on page", () => {
    it("should have a title of Voyage", () => {
      cy.get("title").should("have.text", "Voyage");
    });
  });
});
