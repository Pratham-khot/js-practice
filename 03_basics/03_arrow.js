const user={
    username:"Pratham",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}
user.welcomeMessage()
//============ Arrow Function ( ()=> )=================

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//============== Implicit return ==============

//const addTwo = (num1,num2) =>  num1+num2
const addTwo=(num1,num2)=> ({username:"Pratham"})
console.log(addTwo(3,4))