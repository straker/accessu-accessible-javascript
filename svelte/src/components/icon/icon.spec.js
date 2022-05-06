import { cleanup, render } from '@testing-library/svelte'
import axe from 'axe-core';

import Icon from './icon.svelte';

describe('Icon', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const component = render(Icon, {
        name: 'like',
        alt: 'Like'
      }, { container: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });
  });
});