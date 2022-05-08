it('should navigate to the correct page', () => {
  cy.visit('http://localhost:8080/');
  cy.title().should('eq', 'foo Social Platform')
});

describe('Accessibility', () => {
  it('should have 0 axe violations', () => {
    cy.visit('http://localhost:8080/');
    cy.injectAxe();
    cy.checkA11y();
  });
});