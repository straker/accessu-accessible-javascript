import React from 'react';
import { mount } from 'enzyme';
import axe from 'axe-core';

import SocialButton from './social-button';

describe('SocialButton', () => {
  // axe can only run on connected DOM nodes so we need to mount each
  // component into the DOM tree
  let fixture = document.createElement('div');
  document.body.appendChild(fixture);

  let component;
  afterEach(() => {
    component?.unmount?.();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      component = mount(<SocialButton icon="like" title="Like" count={10} pressed={false} />, { attachTo: fixture });
      const results = await axe.run(fixture);
      expect(results.violations).toHaveLength(0);
    });

    it('should use a button element', () => {
      component = mount(<SocialButton icon="like" title="Like" count={10} pressed={false} />);
      expect(component.find('button')).toBeDefined();
    });

    it('should use [aria-pressed="false"] when passed `pressed=false`', () => {
      component = mount(<SocialButton icon="like" title="Like" count={10} pressed={false} />);
      const attr = component.instance().button.getAttribute('aria-pressed');
      expect(attr).toEqual('false');
    });

    it('should use [aria-pressed="true"] when passed `pressed=true`', () => {
      component = mount(<SocialButton icon="like" title="Like" count={10} pressed={true} />);
      const attr = component.instance().button.getAttribute('aria-pressed');
      expect(attr).toEqual('true');
    });

    it('should update `aria-pressed` when clicked', () => {
      component = mount(<SocialButton icon="like" title="Like" count={10} pressed={false} />);
      component.simulate('click');
      let attr = component.instance().button.getAttribute('aria-pressed');
      expect(attr).toEqual('true');

      component.simulate('click');
      attr = component.instance().button.getAttribute('aria-pressed');
      expect(attr).toEqual('false');
    });
  });
});