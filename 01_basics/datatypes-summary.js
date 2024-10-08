// Primitive datatypes

//7 pdt:number,string,undefined,null,boolean,bigInt,object


const id = Symbol('123')
const anotherId= Symbol('123')
let bal=null
console.log(bal)
console.log(id === anotherId);

const bigNumber = 3534568605321263n



// Non primitive (Reference)

// types: Array, Objects, Functions

const heros =["Spiderman","Ironman"]
let myObj={//this is an object...basically the curly braces are objects//
    name:"Pratham",
    age:22,
}

const myFunction = function()
{
    console.log("Hello World");
    
}

// console.log(typeof bigNumber);
// console.log(typeof bal);
// console.log(typeof myFunction);
// console.log(typeof heros);

// stack and heap memory
// primitive datatypes are stored in stack and non primitive datatypes are stored in heap memory respectively..
//stack creates copy of the declared variable & heap  creates reference to the declared variable ..

let myName = "Pratham"
let anotherName = myName

anotherName="Ronit"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@dotcom",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="pratham@google.com"

console.log(userOne.email);
console.log(userTwo.email);

