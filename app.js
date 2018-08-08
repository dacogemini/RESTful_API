//* Class = blueprint ie, human
const EventEmitter = require('events');

 //* Create a new instance of the class vv Object ie, Dan
const emitter = new EventEmitter();

//* Register a listener | When message is logged, run function
emitter.on('messageLogged', function() {
    console.log("Listener Called");
})

//* Emit = signaling that an event has happened. ('name of event')
//* We raised an event but have not registered a listener. We'll do thst above ^^
emitter.emit('messageLogged');


