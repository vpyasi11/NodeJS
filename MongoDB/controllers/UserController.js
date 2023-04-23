const UserModel = require("../models/Db.schema")

const registerController = async (req, res) => {
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
}

const userController = async (req, res) => {
    const { email } = req.body
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
}

module.exports = {
    registerController,
    userController
}