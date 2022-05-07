import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { getTime } from '../../utils';
import { User, Message } from '../../types';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @ViewChild('container') containerElement!: ElementRef;

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

  public get focus(): boolean {
   return this._focus;
  }

  @Input()
  public set focus(focus: boolean) {
    this._focus = focus;

    setTimeout(() => {
      if (focus) {
        this.containerElement.nativeElement.focus();
      }
    });
  }

  @Output() deleteMessageEvent = new EventEmitter<number>();

  userCommented: boolean = false;
  userLiked: boolean = false;
  userSympathy: boolean = false;
  userShared: boolean = false;
  relativeTime: string = '';

  private _timestamp: string = '';
  private _focus: boolean = false;

  deleteMessage() {
    this.deleteMessageEvent.emit(this.id);
  }
}
