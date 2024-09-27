var events= require('events');
var emitevents=new events.EventEmitter();
var handler=function connected()
{
    console.log("connnected to main...");
    emitevents.emit("data_recevied");
}
emitevents.on('connection', handler);
emitevents.on('data_recevied', function()
{
    console.log("data recevied fired successfully");
});
emitevents.emit('connection');
console.log("end reached");