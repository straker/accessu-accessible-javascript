const AxeBuilder = require('@axe-core/webdriverio').default;
const { remote } = require('webdriverio');
let client;

beforeAll(async () => {
  client = await remote({
    logLevel: 'error',
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu'],
      }
    }
  });
});

it('should navigate to the correct page', async () => {
  await client.url('http://localhost:8080/');
  const title = await client.getTitle();
  expect(title).toEqual('Svelte Social Platform');
});

describe('Accessibility', () => {
  it('should have 0 axe violations', async () => {
    await client.url('http://localhost:8080/');
    const results = await new AxeBuilder({ client }).analyze();
    expect(results.violations).toHaveLength(0);
  });
});