class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
       
}
class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const teach=new Teacher("User1","user@gmail.com","abc")
teach.addCourse();
teach.logMe()
const usernew=new User("Pratham")
usernew.logMe()

console.log(teach instanceof Teacher);
console.log(teach instanceof User);
