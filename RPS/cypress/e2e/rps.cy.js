describe('template spec', () => {
  // Open the URL before each test
  beforeEach(() => {
    // URL to visit
    cy.visit('http://localhost:3000/index.html');
  });
  // Play the game with the 'Rock' option and checks the result
  it('Play the game with the Rock option and checks the result', () => {
      // Get the 'Rock' button that should exist and click on it
    cy.get('[data-cy="rock"]').should("exist").click();

    // Check that the user option is set to 'Rock'
    cy.get('[data-cy="user-option"]').should("have.text", "Rock");

    // Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      // if the computer option is set to 'Rock'
      if(option.text().includes("Rock")) {
        cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
    }
  });
});

// Play the game with the 'Paper' option and checks the result
it('Play the game with the Paper option and checks the result', () => {
  // Get the 'Paper' button that should exist and click on it
cy.get('[data-cy="paper"]').should("exist").click();

// Check that the user option is set to 'Paper'
cy.get('[data-cy="user-option"]').should("have.text", "Paper");

// Check the computer option
cy.get('[data-cy="computer-option"]').then((option) => {
  // if the computer option is set to 'Paper'
  if(option.text().includes("Paper")) {
    cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
}
});
});

// Play the game with the 'Scissors' option and checks the result
it('Play the game with the Scissors option and checks the result', () => {
  // Get the 'Scissors' button that should exist and click on it
cy.get('[data-cy="scissors"]').should("exist").click();

// Check that the user option is set to 'Scissors'
cy.get('[data-cy="user-option"]').should("have.text", "Scissors");

// Check the computer option
cy.get('[data-cy="computer-option"]').then((option) => {
  // if the computer option is set to 'Scissors'
  if(option.text().includes("Scissors")) {
    cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
}
});
});

});
