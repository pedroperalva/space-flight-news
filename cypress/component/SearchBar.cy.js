import SearchBar from "../../src/components/SearchBar";

describe("<SearchBar>", () => {
  it("mounts", () => {
    cy.mount(<SearchBar />);
  });
});

it("searchBar should default to empty string", () => {
  cy.mount(<SearchBar />);
  cy.get("[data-cy=searchbar]").should("have.text", "");
});

it("searchBar should write Hello World and click the button", () => {
  cy.mount(<SearchBar />);
  cy.get("[data-cy=searchbar]").type("Hello World").trigger("change");
  cy.get("[data-cy=searchbarBtn]").trigger("click");
});
