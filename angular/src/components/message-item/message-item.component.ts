import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getTime } from '../../utils';
import { User, Message } from '../../types';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() id: number = 0;
  @Input() user: User = {
    name: '',
    handle: '',
    link: '',
    profile: ''
  };
  @Input() message: string = '';
  @Input() comments: Message[] = [];
  @Input() likes: number = 0;
  @Input() sympathy: number = 0;
  @Input() shares: number = 0;

  public get timestamp(): string {
   return this._timestamp;
  }

  @Input()
  public set timestamp(timestamp: string) {
    this._timestamp = timestamp;
    this.relativeTime = getTime(timestamp);
  }

  @Output() deleteMessageEvent = new EventEmitter<number>();

  userCommented: boolean = false;
  userLiked: boolean = false;
  userSympathy: boolean = false;
  userShared: boolean = false;
  relativeTime: string = '';

  private _timestamp: string = '';

  deleteMessage() {
    this.deleteMessageEvent.emit(this.id);
  }
}
