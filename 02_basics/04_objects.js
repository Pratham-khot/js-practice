//const tinderUser=new Object()
const tinderUser={}
tinderUser.id='123'
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser)
const regularUser={
    email:"some123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pratham",
            lastname:"khot"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(tinderUser))
// console.log(Object.values((tinderUser)));
// console.log(Object.hasOwn(tinderUser,"isLoggedIn"));
const course={
    id:'123',
    name:"pratham",
}
const {id,name}=course
console.log(name);
console.log(id);

