// all the primitive data types are stored in stack


// stored in stack means if they ever used in future the actually they will not be called but there copy will be called and actual value will be remain same and change will occur in copy


// On the other hand the non-primitive types are stored in heap memory i.e whenever they're called and their will be changed then the original value will be changed


//example

let myName = "Aaryan"
let myotherName = myName

console.log(myName + " " + myotherName) // Aaryan Aaryan

myotherName = "Salona" 
console.log(myName + " " + myotherName) //Aaryan Salona\

// in case of object

let userOne = {
    email: "one@gmail.com",
    upi: 132
}
let userTwo = userOne
console.log(userOne.email + " " + userTwo.email) // will print same email id

userTwo.email = "xyz@gmail.com"
console.log(userOne.email + " " + userTwo.email) // still same thing will be print because both the things are same, i.e both are stored in heap memory and are refering to same thing

