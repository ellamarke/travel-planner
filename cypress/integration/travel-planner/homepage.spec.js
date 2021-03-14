/// <reference types="cypress" />

context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Elements on page", () => {
    it("should have a title of Voyage", () => {
      cy.get("title").should("have.text", "Voyage");
    });

    it("should have a search bar", () => {
      cy.get("[data-cy=quick-search-bar]")
        .invoke("attr", "placeholder")
        .should("contain", "Search for a country");
    });

    it("the explore link should have the text 'explore'", () => {
      cy.get("[data-cy=explore-nav]").should("have.text", "Explore");
    });

    it("the profile link should have the text 'profile'", () => {
      cy.get("[data-cy=profile-nav]").should("have.text", "Profile");
    });

    it("the ticker tape should say 'Grab your passport'", () => {
      cy.get("[data-cy=ticker-tape]").should("contain", "Grab your passport");
    });

    it("should have the main search bar", () => {
      cy.get("[data-cy=main-search-bar] input")
        .invoke("attr", "placeholder")
        .should("contain", "Japan? Turkey? Morocco?");
    });

    it("should have a place dropdown", () => {
      cy.get("[data-cy=dropdown] button").should("contain", "Great Lakes");
      cy.get("[data-cy=place-type]").then((items) => {
        expect(items[0]).to.contain.text("Misty Mountains");
        expect(items[1]).to.contain.text("Crumbling Temples");
        expect(items[2]).to.contain.text("Dark Jungles");
        expect(items[3]).to.contain.text("Wild Deserts");
      });
    });

    it("article hero has a save button", () => {
      cy.get(".article-hero button").should("contain", "Save");
    });

    it("place carousel should have at least 3 cards", () => {
      cy.get(".place-carousel .place-card").its("length").should("be.gt", 2);
    });

    it("footer should have three links", () => {
      cy.get(".footer .link").then((items) => {
        expect(items[0]).to.contain.text("Home");
        expect(items[1]).to.contain.text("Explore");
        expect(items[2]).to.contain.text("Profile");
      });
    });
  });

  describe("Navigation from page", () => {
    it("should be able to search for a country", () => {
      cy.get("[data-cy=quick-search-bar]").type("Japan{enter}");
      cy.get("h1").should("contain", "Japan");
    });

    it("should go to explore page", () => {
      cy.get("[data-cy=explore-nav]").click();
      cy.get("h1").should("contain", "Discover somewhere new!");
    });

    it("should go to profile page", () => {
      cy.get("[data-cy=profile-nav]").click();
      cy.get("h1").should("contain", "Let's get planning!");
    });
  });

  describe("Saving articles", () => {
    it("should be able to save article", () => {
      cy.get(".article-hero button").click().should("contain", "Saved!");
    });
  });
});
