const EventEmitter = require("events")
const emitter = new EventEmitter()


emitter.on("belling" , (period) =>{
  console.log(`bell ringing because ${period} class has ended `);
})

// raise an event

// emitter.emit("belling")

// setTimeout(()=>{    
// emitter.emit("belling")
// },2000)

setTimeout(() =>{

emitter.emit("belling", "second")

},2000)
