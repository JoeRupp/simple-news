describe("simple news tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("should have a title, navigation bar, and articles", () => {
    cy.contains("Simple News");
    cy.get(".nav-btn").first().should("text", "Home");
    cy.get(".nav-btn").last().should("text", "World");
    cy.get(".article-container").children().eq(0).should("contain", "1");
  });

  it("should be able to navigate between sections", () => {
    cy.get(".nav-btn").last().click();
    cy.contains("World News");
  });

  it("should be able to select an article to view", () => {
    cy.get(".article-container").children().eq(0).click();
    cy.get(".byline").should("exist");
    cy.get(".btn-to-article").should("exist");
  });

  it("should direct to a 404 page if a url is entered that doesnt match", () => {
    cy.visit("http://localhost:3000/jhkdfshjkds");
    cy.contains("404");
  });
});
