// taking input from terminal
let a = process.argv[2]
console.log(a)

// client-server architecture

// stateless protocol : data not retained by server but just loads on request 

// module creation and import

function add(a,b){
    let c = a+b
    return c
}

age =10

module.exports = add
// or
module.exports.add = add
// adding . makes objects 
module.exports.age = age
