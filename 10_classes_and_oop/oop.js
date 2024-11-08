const user={
    username:"Pratham",
    email:"pratham@gmail.com",
    pass: 123,

    getUserDetails :function () {
        //console.log("Got user details..");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);

function User(username,logInCount,isLoggedIn){
    this.username=username
    this.logInCount=logInCount
    this.isLoggedIn=isLoggedIn
}

const userOne=new User("pratham",11,true)
const userTwo=new User("ronit",20,false)
console.log(userOne);
console.log(userTwo);



