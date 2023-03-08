const fs = require("fs")

// fs.writeFile("myfile.txt" , "Hello developers,")
// fs.appendFile("myFile.txt" , "Welcome")

fs.readFile("myFile.txt" , (err,data) =>{
    console.log(data.toString());
}) ;
// console.log(data)--got buffer;
console.log("object");

