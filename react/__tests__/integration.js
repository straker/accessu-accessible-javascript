const { AxePuppeteer } = require('@axe-core/puppeteer');

it('should navigate to the correct page', async () => {
  await page.goto('http://localhost:8080/');
  const title = await page.title();
  expect(title).toEqual('React Social Platform');
});

describe('Accessibility', () => {
  it('should have 0 axe violations', async () => {
    await page.goto('http://localhost:8080/');
    const results = await new AxePuppeteer(page).analyze();
    expect(results.violations).toHaveLength(0);
  });

  describe('Create message', () => {
    it('should move focus to the new message', async () => {
      await page.goto('http://localhost:8080/');
      await page.focus('#message')
      await page.keyboard.type('Hello World!');
      await page.click('input[type="submit"]');

      const focusHandle = await page.evaluateHandle(() => document.activeElement);
      const firstMessage = await page.$('[data-test-handle="message-item"]');
      const equal = await page.evaluate((e1, e2) => e1 === e2, focusHandle, firstMessage);
      expect(equal).toEqual(true);
    });
  });

  describe('Delete message', () => {
    it('should move focus to the first message', async () => {
      await page.goto('http://localhost:8080/');
      await page.click('[data-test-handle="delete-item"]');

      const focusHandle = await page.evaluateHandle(() => document.activeElement);
      const firstMessage = await page.$('[data-test-handle="message-item"]');
      const equal = await page.evaluate((e1, e2) => e1 === e2, focusHandle, firstMessage);
      expect(equal).toEqual(true);
    });
  });
});