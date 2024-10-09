//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Pratham",
    [mySym]:"mykey1",
    age:22,
    location:"Pune",
    email:"khotpratham.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email);
//JsUser.email="pratham@chatgpt.com"
//Object.freeze(JsUser)
//JsUser.email="pratham@microsoft.com"
//console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


