import React from 'react';
import Icon from '../icon/icon';
import styles from './social-button.modules.css';
import { formatStat } from '../utils';

export default class SocialButton extends React.Component {
  constructor(props) {
    super(props);
    const { count, pressed } = props;
    this.state = { count, pressed };
  }

  onClick() {
    const pressed = !this.state.pressed;
    const count = this.state.count + (pressed ? 1 : -1);
    this.setState({ count, pressed });
    this.props.onClick?.();
  }

  render() {
    const { title, icon } = this.props;
    const { count, pressed } = this.state;

    const iconName = `${icon}${pressed ? '_filled' : ''}`;
    const className = `${styles.socialButton} ${pressed ? styles.pressed : ''}`;

    return <div
      className={className}
      title={title}
      onClick={() => this.onClick()}
    >
      <Icon name={iconName} alt={title}></Icon>
      {formatStat(count)}
    </div>
  }
}