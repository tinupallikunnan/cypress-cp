// Describe block to group related tests under a common title
describe("Example Cypress Test", () => {
  // Test case within the describe block
  it("Visits the Commands Actions Page and Interacts with Action Button and Canvas", () => {
    // Visit the Commands Actions Page
    cy.visit("https://example.cypress.io/commands/actions");

    // Click on the Action Button
    cy.get(".action-btn").click();

    // Click on the Canvas Element
    cy.get("#action-canvas").click(); // clicking in the center of the element is the default

    // Click on the Top Left of the Canvas Element
    cy.get("#action-canvas").click("topLeft");

    // Click on the Bottom Right of the Canvas Element
    cy.get("#action-canvas").click("bottomRight");
  });
});