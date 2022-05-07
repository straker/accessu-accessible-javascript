import { TestBed } from '@angular/core/testing';
import { IconComponent } from '../icon/icon.component';
import * as axe from 'axe-core';

describe('IconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IconComponent
      ],
    }).compileComponents();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(IconComponent);
      const comp = fixture.componentInstance;
      comp.name = 'like';
      comp.alt = 'Like';
      fixture.detectChanges();

      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});