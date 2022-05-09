it('should navigate to the correct page', () => {
  cy.visit('http://localhost:8080/');
  cy.title().should('eq', 'Vue Social Platform')
});

describe('Accessibility', () => {
  it('should have 0 axe violations', () => {
    cy.visit('http://localhost:8080/');
    cy.injectAxe();
    cy.checkA11y();
  });

  // describe('Create message', () => {
  //   it('should move focus to the new message', async () => {
  //     await page.goto('http://localhost:8080/');
  //     await page.focus('#message')
  //     await page.keyboard.type('Hello World!');
  //     await page.click('input[type="submit"]');

  //     const focusHandle = await page.evaluateHandle(() => document.activeElement);
  //     const firstMessage = await page.$('[data-js-handle="message-item"]');
  //     const equal = await page.evaluate((e1, e2) => e1 === e2, focusHandle, firstMessage);
  //     expect(equal).toEqual(true);
  //   });
  // });

  describe('Delete message', () => {
    it('should move focus to the first message', () => {
      cy.visit('http://localhost:8080/');
      cy.get('[data-test-handle="delete-item"]').first().click();

      cy.get('[data-test-handle="message-item"]').first().should('have.focus');
    });
  });
});