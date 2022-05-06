import { mount } from "@vue/test-utils";
import axe from 'axe-core';

import SocialButton from './social-button.vue';

describe('SocialButton', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount();
  });

  describe('Accessibility', () => {
    it('should have 0 violations', async () => {
      component = mount(SocialButton, {
        attachTo: fixture,
        props: {
          icon: 'like',
          title: 'Like',
          count: 10,
          pressed: false
        }
      });
      const results = await axe.run(fixture);
      expect(results.violations).to.have.length(0);
    });
  });
});