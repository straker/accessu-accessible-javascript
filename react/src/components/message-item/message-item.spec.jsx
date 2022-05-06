import React from 'react';
import { mount } from 'enzyme';
import axe from 'axe-core';

import MessageItem from './message-item';

describe('MessageItem', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

   const message = {
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
  };

  let component;
  afterEach(() => {
    component?.unmount();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      component = mount(<MessageItem {...message} />, { attachTo: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });
  });
});