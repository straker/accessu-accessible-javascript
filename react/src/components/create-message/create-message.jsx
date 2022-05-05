import React from 'react';
import styles from './create-message.modules.css';

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  /**
   * Submit the form data to the parent component.
   * @param {Event} event - React onSubmit event.
   */
  onSubmit(event) {
    event.preventDefault();

    if (!this.state.message.trim()) {
      return;
    }

    this.props.onCreate(this.state.message);
    this.setState({ message: '' });
  }

  /**
   * Update message state when textarea changes.
   * @param {Event} event - React onChange event.
   */
  onChange(event) {
    this.setState({ message: event.target.value })
  }

  render () {
    return <form className={styles.form} onSubmit={(e) => this.onSubmit(e)}>
      <label htmlFor="message">New Message</label>
      <textarea
        className={styles.textarea}
        id="message"
        value={this.state.message}
        onChange={(e) => this.onChange(e)}
      ></textarea>
      <div>
        <input className={styles.submit} type="submit" value="Post"/>
      </div>
    </form>
  }
}