describe("Home Page", () => {
  it("successfully loads and get data from spaceflightnews API", () => {
    cy.visit("/");
  });

  it("successfully loads more 10 articles from spaceflightnews API after click on button", () => {
    cy.get("[data-cy=loadBtn]").trigger("click");
  });
});
