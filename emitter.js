const EventEmitter = require('events');

const emitter = new EventEmitter();

function raiseEvent() {
  emitter.emit('customEvent', 'Hello, world!');
}

module.exports = { emitter, raiseEvent };
