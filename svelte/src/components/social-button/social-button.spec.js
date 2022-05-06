import { cleanup, render } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
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

    it('should use a button element', async () => {
      const component = render(SocialButton, {
        icon: 'like',
        title: 'Like',
        count: 10,
        pressed: false
      }, { container: fixture });
      expect(await component.findByRole('button')).toBeDefined();
    });

    it('should use [aria-pressed="false"] when passed `pressed=false`', async () => {
      const component = render(SocialButton, {
        icon: 'like',
        title: 'Like',
        count: 10,
        pressed: false
      }, { container: fixture });
      const button = await component.findByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'false');
    });

    it('should use [aria-pressed="true"] when passed `pressed=true`', async () => {
      const component = render(SocialButton, {
        icon: 'like',
        title: 'Like',
        count: 10,
        pressed: true
      }, { container: fixture });
      const button = await component.findByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'true');
    });

    it('should update `aria-pressed` when clicked', async () => {
      const user = userEvent.setup();
      const component = render(SocialButton, {
        icon: 'like',
        title: 'Like',
        count: 10,
        pressed: false
      }, { container: fixture });
      const button = await component.findByRole('button');
      await user.click(button);
      expect(button).toHaveAttribute('aria-pressed', 'true');

      await user.click(button);
      expect(button).toHaveAttribute('aria-pressed', 'false');
    });
  });
});