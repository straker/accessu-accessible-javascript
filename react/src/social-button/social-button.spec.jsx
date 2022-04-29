import React from 'react';
import { mount, render } from 'enzyme';
import axe from 'axe-core';
import assert from 'assert';

import SocialButton from './social-button';

describe('SocialButton', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount();
  });

  it('should have 0 violations', async () => {
    component = mount(<SocialButton icon="like" title="Like" count={10} pressed={false} />, { attachTo: fixture });
    const results = await axe.run(fixture);
    assert.equal(results.violations.length, 0);
  });
});