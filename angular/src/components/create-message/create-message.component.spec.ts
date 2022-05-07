import { TestBed } from '@angular/core/testing';
import { CreateMessageComponent } from '../create-message/create-message.component';
import * as axe from 'axe-core';

describe('CreateMessageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateMessageComponent
      ],
    }).compileComponents();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(CreateMessageComponent);
      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});