class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username :${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const pratham=new User("pratham")
//console.log(pratham.createId())//this is not accessible to any member or any extended class since createId() is declared as static

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }

}

const iphone=new Teacher("iPhone","i@phone.com")
iphone.logMe();
iphone.createId()//this is not accessible to any member or any extended class since createId() is declared as static
