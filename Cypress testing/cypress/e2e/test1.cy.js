describe('template spec', () => {
  it('Visits the Example Page and Interacts with an Element', () => {
    cy.visit('https://example.cypress.io')

    cy.get(".home-list").contains("Querying").click();

    // Assert about the content of the Page
    //Check if the url contains "/commands/querying"
    cy.url().should("include","/commands/querying");

    //Check if there is exactly an element with the class "query-list"
    cy.get(".query-list").should("have.length", 1);

    // Check if the element with class "query-list>li" has the class "first"
    cy.get(".query-list>li").should("have.class", "first");

    // Check if the element with the class "query-list>li.first" contains the text apples
    cy.get(".query-list>li.first").should("contain", "apples");
  })
})