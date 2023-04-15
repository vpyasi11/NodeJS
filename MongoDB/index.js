const express = require("express")
const app = express()
app.use(express.json())
// 1st step : install ( npm install mongoose)
// 2nd step : require mongoose
const mongoose = require("mongoose")

app.get('/test', (req,res) => {
    res.json({
        message:"get request working!!"
    })
})

// 3rd step : connect database
// this line suggest only connecting to db
mongoose.connect('mongodb://127.0.0.1:27017/myDB')
  .then(() => console.log('Connected to my DB!'));
    // it returns a promise

  // in order to vew this db, we have to specify the kind of database it is (schema) and what kind of data it is going to store

  const Schema = mongoose.Schema;
  // const ObjectId = Schema.ObjectId; (not required as mongoDB by default generates objectID to data)

  // create schema
  const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  });

  // create model
  const UserModel = mongoose.model('UserDatabase', UserSchema)
 // this model will be used to interact with our APIs

app.post("/register",(req,res)=>{
    const {username,email,password} = req.body
    console.log(username,email,password)
    res.json({
        message : "data received"
    })
})

app.listen(5000, ()=>{
    console.log("server running")
})