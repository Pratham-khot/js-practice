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

console.log(typeof bigNumber);
console.log(typeof bal);
console.log(typeof myFunction);
console.log(typeof heros);
