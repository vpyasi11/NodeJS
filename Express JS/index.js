// TO install express
// npm init -y
// npm i express

// creating a server

const express = require("express")

const app = express();

// get method 
// get method : passes the info through url
app.get("/test",(req, res)=>{
    res.send("GET method working and also my server")
})

// now run the server at "localhost:5000/test"

// to provide path/portnumber
// act as main file
app.listen(5000,()=>{
    console.log("my server is running")
})