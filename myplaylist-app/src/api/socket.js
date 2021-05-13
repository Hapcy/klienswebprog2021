import io from 'socket.io-client';
import { BASE_PATH } from './rest';

// Osszuk meg a socketet több channel között
let socket;

export class MyPlaylistAppChannel {
  constructor(resource) {
    this.resource = resource;
    if (!socket) {
      socket = io(BASE_PATH);
    }
  }

  created(handler) {
    const listener = (receivedMessage) => {
      if (receivedMessage.emitter !== socket.id) {
        handler(receivedMessage.message);
      }
    };
    const event = `${this.resource} created`;
    socket.on(event, listener);
    return () => socket.off(event, listener);
  }

  create(message) {
    socket.emit('create', this.resource, {
      message,
      emitter: socket.id,
    });
  }
}
