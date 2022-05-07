import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { MessageItemComponent } from '../message-item/message-item.component';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { IconComponent } from '../icon/icon.component';
import * as axe from 'axe-core';
import { Message } from '../../types';

describe('MessageItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MessageItemComponent,
        MockComponent(SocialButtonComponent),
        MockComponent(IconComponent)
      ],
    }).compileComponents();
  });

  const message: Message = {
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
  };

  describe('Accessibility', () => {
    it('should have 0 axe violations', async () => {
      const fixture = TestBed.createComponent(MessageItemComponent);
      const comp = fixture.componentInstance;
      comp.id = message.id
      comp.user = message.user
      comp.timestamp = message.timestamp
      comp.message = message.message
      comp.comments = message.comments
      comp.likes = message.likes
      comp.sympathy = message.sympathy
      comp.shares = message.shares
      fixture.detectChanges();

      const results = await axe.run(fixture.nativeElement);
      expect(results.violations).toHaveSize(0);
    });
  });
});