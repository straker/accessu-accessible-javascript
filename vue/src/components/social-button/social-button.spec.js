import { mount } from "@vue/test-utils";
import axe from 'axe-core';

import SocialButton from './social-button.vue';

describe.only('SocialButton', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount?.();
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

    it('should use a button element', () => {
      component = mount(SocialButton, {
        props: {
          icon: 'like',
          title: 'Like',
          count: 10,
          pressed: false
        }
      });
      expect(component.find('button').exists()).to.be.true;
    });

    it('should use [aria-pressed="false"] when passed `pressed=false`', () => {
      component = mount(SocialButton, {
        props: {
          icon: 'like',
          title: 'Like',
          count: 10,
          pressed: false
        }
      });
      expect(component.attributes('aria-pressed')).to.equal('false');
    });

    it('should use [aria-pressed="true"] when passed `pressed=true`', () => {
      component = mount(SocialButton, {
        props: {
          icon: 'like',
          title: 'Like',
          count: 10,
          pressed: true
        }
      });
      expect(component.attributes('aria-pressed')).to.equal('true');
    });

    it('should update `aria-pressed` when clicked', async () => {
      component = mount(SocialButton, {
        props: {
          icon: 'like',
          title: 'Like',
          count: 10,
          pressed: false
        }
      });
      const button = component.find('button');
      await button.trigger('click');
      expect(component.attributes('aria-pressed')).to.equal('true');

      await button.trigger('click');
      expect(component.attributes('aria-pressed')).to.equal('false');
    });
  });
});