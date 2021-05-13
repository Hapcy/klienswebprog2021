import { messageChannel } from '../../api';

export function sendMessage(message) {
  return () => {
    messageChannel.create(message);
  };
}

export function setupMessageReceiver() {
  return (dispatch) => {
    messageChannel.onCreated((message) => {
      if (message.type) {
        dispatch(message);
      }
    });
  };
}
