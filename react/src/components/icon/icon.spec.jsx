import React from 'react';
import { mount, render } from 'enzyme';
import axe from 'axe-core';
import assert from 'assert';

import Icon from './icon';

describe('Icon', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount();
  });

  it('should have 0 violations', async () => {
    component = mount(<Icon name="like" />, { attachTo: fixture });
    const results = await axe.run(fixture);
    assert.equal(results.violations.length, 0);
  });
});