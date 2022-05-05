// const { AxePuppeteer } = require('@axe-core/puppeteer');

it('should navigate to the correct page', async () => {
  cy.visit('http://localhost:8080/');
  cy.title().should('eq', 'foo Social Platform')
});

describe('Accessibility', () => {
  it('should have 0 violations', async () => {
    cy.visit('http://localhost:8080/');
    cy.injectAxe();
    cy.checkA11y();
  });
});