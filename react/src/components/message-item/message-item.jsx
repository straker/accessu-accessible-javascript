import React from 'react';
import styles from './message-item.modules.css';
import Icon from '../icon/icon';
import SocialButton from '../social-button/social-button';
import { getTime } from '../../utils';

export default class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    const { likes, sympathy, shares } = props;
    this.state = {
      userCommented: false,
      likes,
      userLiked: false,
      sympathy,
      userSympathy: false,
      shares,
      userShared: false
    };
  }

  componentDidMount() {
    if (this.props.focus) {
      setTimeout(() => {
        this.container.focus();
      });
    }
  }

  componentDidUpdate() {
    if (this.props.focus) {
      setTimeout(() => {
        this.container.focus();
      });
    }
  }

  render () {
    const {
      id,
      user,
      timestamp,
      message,
      comments,
      deleteMessage,
      focus
    } = this.props;
    const {
      userCommented,
      likes,
      userLiked,
      sympathy,
      userSympathy,
      shares,
      userShared
    } = this.state;

    return <div className={styles.messageItem} tabIndex={-1} ref={(ref) => this.container = ref} data-js-handle="message-item">
      <div>
        <img className={styles.profile} src={user.profile} alt="" />
      </div>
      <div className={styles.message}>
        <div className={styles.header}>
          <a className={styles.link} href={user.link}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.handle}>{user.handle}</span>
          </a>
          <div className={styles.date}>{getTime(timestamp)}</div>
          <div
            tabIndex={0}
            className={styles.delete}
            title="Delete"
            onClick={() => deleteMessage(id)}
            data-js-handle="delete-item"
          >
            <Icon name="delete" alt="Delete"/>
          </div>
        </div>
        <div className={styles.body}>
          {message}
        </div>
        <div className={styles.footer}>
          <ul className={styles.list}>
            <li>
              <SocialButton icon="comment" title="Comment" count={comments.length} pressed={userCommented}/>
            </li>
            <li>
              <SocialButton icon="like" title="Like" count={likes} pressed={userLiked}/>
            </li>
            <li>
              <SocialButton icon="sympathize" title="Sympathize" count={sympathy} pressed={userSympathy}/>
            </li>
            <li>
              <SocialButton icon="share" title="Share" count={shares} pressed={userShared}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
}