import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent {
  message: string = '';

  @Output() createMessageEvent = new EventEmitter<string>();

  onSubmit(): void {
    if (!this.message.trim()) {
      return;
    }

    this.createMessageEvent.emit(this.message);
    this.message = '';
  }
}
