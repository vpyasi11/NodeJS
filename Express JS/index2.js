const express = require("express")
const app = express()
app.use(express.json())
const courses = [{
    "name":"NodeJS",
    "author":"sanpreet"
},
{
    "name":"react",
    "author":"anuj"
}]

app.get("/", function(req,res){
    res.send("Hello world")
})

// creating get api for getting the data for all the courses

app.get("/courses", (req,res)=>{
    // res.send("Courses")
    res.send(courses) // array of objects

})

// app.get("/courses/:name", (req,res)=>{
//     res.send(req.params.name)
// })// :name will act as link that we pass from front end like we use link http://localhost:3000/courses/abc it will print abc on screen as "app.send will write params.name"
// here name only acts as a variable
// whatever we write after : will get sent (res.send)


// sending the single course data in response
app.get("/courses/:name"),((req,res)=>{
    courses.find(ele =>{
        if((req.params.name) === ele.name){
            res.send(ele)
        } 
    })
    
})




// npm install nodemon : ~ live server for node
// also add start:"nodemon index2.js" inside scripts of package.json
// do npm start


// get api where i can get data for specific course




// create a POST request for adding a new course
app.post("/courses",(req,res)=>{
    const course = {}
    course.name = req.body.name
    course.author = req.body.author
    // or course = req.body 
    courses.push(course)  
    res.send(course)
})

app.listen(3000, ()=>{
    console.log("Server started at 3000")
})


// create product.js for ecommerce app
// it will hold array of products({id,name,category,price})
// import that array in index.js
// create api for getallproducts,getproductbyid,getproductbyname,addnewproduct