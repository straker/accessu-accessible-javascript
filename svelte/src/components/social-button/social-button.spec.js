import { cleanup, render } from '@testing-library/svelte'
import axe from 'axe-core';

import SocialButton from './social-button.svelte';

describe('SocialButton', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    it('should have 0 violations', async () => {
      const component = render(SocialButton, {
        icon: 'like',
        title: 'Like',
        count: 10,
        pressed: false
      }, { container: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });
  });
});