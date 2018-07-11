import * as React from 'react';
import {connect} from 'react-redux';

import {AppState} from '@src/types/todoApp';

type MessageType = {
  message: string;
};

class Message extends React.Component<MessageType> {
  render() {
    const {message} = this.props;
    return (
      message
        ? <span className="message">{message}</span>
        : null);
  }
}

export default connect(
  (state: AppState) => ({
    message: state.message,
  })
)(Message);
