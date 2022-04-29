import React from 'react';
import { mount, render } from 'enzyme';
import axe from 'axe-core';
import assert from 'assert';

import MessageList from './message-list';

describe('MessageList', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount();
  });

  it('should have 0 violations', async () => {
    const messages = [{
      id: 1,
      user: {
        name: 'John Doe',
        handle: '@john_doe',
        link: '/user/@john_doe',
        profile: '/path/to/profile.png'
      },
      timestamp: (new Date()).toISOString(),
      messaage: 'Hello World',
      comments: [],
      likes: 1,
      sympathy: 2,
      shares: 3
    }];

    component = mount(<MessageList messages={messages} />, { attachTo: fixture });
    const results = await axe.run(fixture);
    assert.equal(results.violations.length, 0);
  });
});