const express = require("express")
const app = express()
app.use(express.json())
// 1st step : install ( npm install mongoose)
// 2nd step : require mongoose
const mongoose = require("mongoose")

app.get('/test', (req, res) => {
    res.json({
        message: "get request working!!"
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

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)
    let userobj = {
        username: username,
        password: password,
        email: email
    }

    try {
        //method to store the data in mongoDB
        // or even without try/catch block it can work

        // to prevent duplicate data
        const mail = await UserModel.find({ email })

        if (mail.length !== 0) {
            console.log(mail)
            res.json({
                message: `${email} already exist`
            })
        }
        else {
            let data = await UserModel(userobj).save()
            if (data) {
                return res.json({
                    message: "data inserted successfully"
                })
            }
            return res.json({
                message: "data not inserted"
            })// will work bcoz we can send one response for one request
            // error on multiple responses : mmultiple response
        }
    }
    catch (error) {
        return res.json({
            message: "some error"
        })
    }
})

// method to find in DB
app.post("/user", async (req, res) => {
    const { email } = req.body
    // to find data baseed onn email 

    // const data = await UserModel.find({email})
    // console.log(data)

    //or

    // UserModel.find({email})
    // .then(data=>{
    //     res.send(data)
    //     console.log(data)
    // })
    // .catch(err=>{
    //     res.send(err)
    //     console.log(err)
    // })

    // or
    try {
        const data = await UserModel.find({ email })
        if (data) {
            // console.log(data)
            return res.json({
                message: "data found"
            })
        }
        return res.json({
            message: "data not dound"
        })
    }
    catch (error) {
        return res.json({
            message: "error"
        })
    }
})

// Any function handling request and response : middleware

app.listen(5000, () => {
    console.log("server running")
})