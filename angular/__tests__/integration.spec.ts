import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test('should navigate to the correct page', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  const title = await page.title();
  expect(title).toEqual('Angular Social Platform');
});

test.describe('Accessibility', () => {
  test('should have 0 axe violations', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test.describe('Delete message', () => {
    test('should move focus to the first message', async ({ page }) => {
      await page.goto('http://localhost:8080/');
      await page.click('[data-test-handle="delete-item"]');

      const firstMessage = await page.locator('[data-test-handle="message-item"]').first();
      await expect(firstMessage).toBeFocused();
    });
  });
});