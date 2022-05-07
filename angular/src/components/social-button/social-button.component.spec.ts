import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { IconComponent } from '../icon/icon.component';
import * as axe from 'axe-core';

describe('SocialButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SocialButtonComponent,
        MockComponent(IconComponent)
      ],
    }).compileComponents();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(SocialButtonComponent);
      const comp = fixture.componentInstance;
      comp.icon = 'like';
      comp.title = 'Like';
      comp.count = 10;
      comp.pressed = false;
      fixture.detectChanges();

      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});