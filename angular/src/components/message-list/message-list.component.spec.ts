import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageItemComponent } from '../message-item/message-item.component';
import * as axe from 'axe-core';
import { Message } from '../../types';

describe('MessageListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MockComponent(MessageItemComponent)
      ],
    }).compileComponents();
  });

  const messages: Message[] = [{
    id: 1,
    user: {
      name: 'John Doe',
      handle: '@john_doe',
      link: '/user/@john_doe',
      profile: '/path/to/profile.png'
    },
    timestamp: (new Date()).toISOString(),
    message: 'Hello World',
    comments: [],
    likes: 1,
    sympathy: 2,
    shares: 3
  }];

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(MessageListComponent);
      const comp = fixture.componentInstance;
      comp.messages = messages;
      fixture.detectChanges();

      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});