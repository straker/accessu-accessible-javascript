import { cleanup, render } from '@testing-library/svelte'
import axe from 'axe-core';

import MessageList from './message-list.svelte';

describe('MessageList', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  const messages = [{
    id: 1,
    user: {
      name: 'John Doe',
      handle: '@john_doe',
      link: '/user/@john_doe',
      profile: '/path/to/profile.png'
    },
    timestamp: (new Date()).toISOString(),
    message: 'Hello World',
    comments: [],
    likes: 1,
    sympathy: 2,
    shares: 3
  }];

  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const component = render(MessageList, {
        messages
      }, { container: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });
  });
});