import { Component } from '@angular/core';

// pretend we got this from a database query
import messageData from '../../assets/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = messageData;
  focus: boolean = false;

  /**
   * Create a new message state object.
   * @param {String} message - User message.
   */
  createMessage(message: string): void {
    const newMessage = {
      // a mock id and user data
      id: Math.random(),
      user: {
        name: 'Sam Mills',
        handle: '@sam_mills',
        link: '/users/@sam_mills',
        profile: '/assets/sam-profile.png'
      },
      timestamp: (new Date()).toISOString(),
      message,
      comments: [],
      likes: 0,
      sympathy: 0,
      shares: 0
    };
    this.messages = [newMessage, ...this.messages];
  }

  /**
   * Delete a message from the messages state.
   * @param {Number} id - ID of the message to delete.
   */
  deleteMessage(id: number) {
    this.messages = this.messages.filter(message => message.id !== id);
    this.focus = true;
  }
}
