const { emitter } = require('./emitter');

emitter.on('customEvent', (message) => {
  console.log('Event received:', message);
});
