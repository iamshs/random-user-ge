const http = require("http") ;


const server = http.createServer( (req,res) => {
 res.write("Hello developers")
 res.end()
})

server.listen(5000);

console.log("listening on port 5000");