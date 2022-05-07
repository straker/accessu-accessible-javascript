import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { CreateMessageComponent } from '../create-message/create-message.component';
import { MessageListComponent } from '../message-list/message-list.component';
import * as axe from 'axe-core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(CreateMessageComponent),
        MockComponent(MessageListComponent)
      ],
    }).compileComponents();
  });

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});