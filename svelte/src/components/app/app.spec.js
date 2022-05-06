import { cleanup, render } from '@testing-library/svelte'
import axe from 'axe-core';

import App from './app.svelte';

describe('App', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const component = render(App, {}, { container: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });
  });
});