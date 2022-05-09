import React from 'react';
import Icon from '../icon/icon';
import styles from './social-button.modules.css';
import { formatStat } from '../../utils';

export default class SocialButton extends React.Component {
  constructor(props) {
    super(props);
    const { count, pressed = false } = props;
    this.state = { count, pressed };
  }

  /**
   * Update the buttons pressed state.
   */
  onClick(event) {
    const pressed = !this.state.pressed;
    const count = this.state.count + (pressed ? 1 : -1);
    this.setState({ count, pressed });
  }

  render() {
    const { title, icon } = this.props;
    const { count, pressed } = this.state;

    const iconName = `${icon}${pressed ? '_filled' : ''}`;
    const className = `${styles.socialButton} ${pressed ? styles.pressed : ''}`;

    return <button
      ref={(node) => this.button = node}
      aria-pressed={pressed}
      className={className}
      title={title}
      aria-label={title}
      onClick={() => this.onClick(event)}
    >
      <Icon name={iconName} alt={title}></Icon>
      {formatStat(count)}
    </button>
  }
}