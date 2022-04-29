const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

after(async () => {
  await page.close();
  await browser.close();
});

it('should navigate to the correct page', async () => {
  await page.goto('http://localhost:8080/');
  const title = await page.title();
  assert.equal(title, 'React Social Platform');
});

describe('Accessibility', () => {
  it('should have 0 violations', async () => {
    await page.goto('http://localhost:8080/');
    const results = await new AxePuppeteer(page).analyze();
    assert.equal(results.violations.length, 0);
  });
});