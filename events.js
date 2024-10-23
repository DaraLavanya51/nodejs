//ex:when you walk into a shop by opening the door a tiny bell goes off that alerts the shop keeper that he has a customer
//this case you opening the door is to be the event and going to handle the bell by ringing the bell and rining the bell is know as event handler

var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function(){
    console.log("Ring ring ring");
    eventEmitter.emit('bellrings','Welcome');
}

eventEmitter.on('doorOpen',ringbell);
eventEmitter.on('bellrings',function(message){
    console.log(message);
})
eventEmitter.emit('doorOpen');
