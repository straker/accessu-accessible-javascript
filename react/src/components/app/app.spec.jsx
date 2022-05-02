import React from 'react';
import { mount, render } from 'enzyme';
import axe from 'axe-core';
import assert from 'assert';

import App from './app';

describe('App', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      component = mount(<App />, { attachTo: fixture });
      const results = await axe.run(fixture);
      assert.equal(results.violations.length, 0);
    });
  });
});