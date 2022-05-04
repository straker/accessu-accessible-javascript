import React from 'react';
import MessageList from '../message-list/message-list';
import CreateMessage from '../create-message/create-message';
import styles from './app.modules.css';

// pretend we got this from a database query
import messages from '../../assets/messages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages };
    this.createMessage = this.createMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  /**
   * Create a new message state object.
   * @param {String} message - User message.
   */
  createMessage(message) {
    const newMessage = {
      // a mock id and user data
      id: Math.random(),
      user: {
        name: 'Sam Mills',
        handle: '@sam_mills',
        link: '/users/@sam_mills',
        profile: '/src/assets/sam-profile.png'
      },
      timestamp: (new Date()).toISOString(),
      message,
      comments: [],
      likes: 0,
      sympathy: 0,
      shares: 0
    };
    this.setState({ messages: [newMessage, ...this.state.messages] });
  }

  /**
   * Delete a message from the messages state.
   * @param {Number} id - ID of the message to delete.
   */
  deleteMessage(id) {
    this.setState({ messages: this.state.messages.filter(message => message.id !== id)});
  }

  render() {
    return <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.icon} src="/src/assets/react-logo.svg" alt=""/>
        <h1 className={styles.title}>Home</h1>
      </header>
      <main className={styles.body}>
        <CreateMessage onCreate={this.createMessage}/>
        <MessageList messages={this.state.messages} onDelete={this.deleteMessage}/>
      </main>
    </div>
  }
}