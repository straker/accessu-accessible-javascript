import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../types';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  @Input() messages: Message[] = [];
  @Input() focus: boolean = false;

  @Output() deleteMessageEvent = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteMessageEvent.emit(id);
  }
}
