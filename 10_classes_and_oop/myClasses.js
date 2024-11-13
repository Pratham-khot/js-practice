// class User{
//     constructor(username,email,pass){
//         this.username=username
//         this.email=email
//         this.pass=pass
//     }
//     encryptPassword(){
//         return `${this.pass}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const tokiyo=new User("Tokiyo","tokiyo@gmail.com","123");

// console.log(tokiyo.encryptPassword());
// console.log(tokiyo.changeUsername());

//behind the scene

function User(username,email,pass){
    this.username=username
    this.email=email
    this.pass=pass
}

User.prototype.encryptPassword=function(){
    return `${this.pass}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const alex=new User("Alex","alex@gmail.com","123");

console.log(alex.encryptPassword());
console.log(alex.changeUsername());