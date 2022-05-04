import React from 'react';
import MessageItem from '../message-item/message-item';
import styles from './message-list.modules.css';

export default class MessageList extends React.Component {
  render() {
    const { messages, onDelete } = this.props;

    const messageList = messages.map(message => {
      return <li key={message.id}><MessageItem {...message} deleteMessage={() => onDelete(message.id)}/></li>
    });

    return <ul className={styles.messageList}>{messageList}</ul>
  }
}