const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

// basic call of events
// myEmitter.on('event', () => {
//     console.log(++i);
// })

// myEmitter.emit('event');
// myEmitter.emit('event');

// call event only once
// var i = 0;
// myEmitter.once('event', () => {
//     console.log(++i);
// })

// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');