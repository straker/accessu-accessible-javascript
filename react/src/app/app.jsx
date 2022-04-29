import React from 'react';
import MessageList from '../message-list/message-list';
import Icon from '../icon/icon';
import CreateMessage from '../create-message/create-message';
import styles from './app.modules.css';
import messages from '../../assets/data/messages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages };
    this.createMessage = this.createMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  createMessage(message) {
    const newMessage = {
      id: Math.random(),
      user: {
        name: 'Sam Mills',
        handle: '@sam_mills',
        link: '/users/@sam_mills',
        profile: '/assets/images/sam-profile.png'
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

  deleteMessage(id) {
    this.setState({ messages: this.state.messages.filter(message => message.id !== id)});
  }

  render() {
    return <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.icon} src="/assets/images/react-logo.svg" alt=""/>
        <h1 className={styles.title}>Home</h1>
      </header>
      <main className={styles.body}>
        <CreateMessage onCreate={this.createMessage}/>
        <MessageList messages={this.state.messages} onDelete={this.deleteMessage}/>
      </main>
    </div>
  }
}