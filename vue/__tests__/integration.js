const { AxePuppeteer } = require('@axe-core/puppeteer');

it('should navigate to the correct page', async () => {
  await page.goto('http://localhost:8080/');
  const title = await page.title();
  expect(title).toEqual('React Social Platform');
});

describe('Accessibility', () => {
  it('should have 0 violations', async () => {
    await page.goto('http://localhost:8080/');
    const results = await new AxePuppeteer(page).analyze();
    expect(results.violations).toHaveLength(0);
  });
});