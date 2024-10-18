function addTwoNumbers(num1,num2){
    let result=num1+num2
    return result

}

const sum=addTwoNumbers(20,20)
console.log("Result: ",sum);

function userLogin(username){
    return `${username} just logged in..`
}
console.log(userLogin("Pratham"))

function calculateCart(...num1){
    return num1
}
console.log(calculateCart(100,500,200,2001,10000));
// const user={
//     username:"Pratham",
//     price:199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"Pratham",
    price:1000
})

const mynewarr=[200,300,400,500]

function returnSecondvalue(getArray){
    return getArray[2]
}
//console.log(returnSecondvalue(mynewarr));
console.log(returnSecondvalue([100,200,400,700]));
