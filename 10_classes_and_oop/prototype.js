//let name="Pratham     "

//console.log(name.trim().length);
//console.log(name.trueLength())


let myHero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.pratham=function(){
    console.log("Pratham is present in all objects");
    
}
Array.prototype.heyPratham=function(){
    console.log(`Pratham says hello world`);
    
}
//heroPower.pratham()
// myHero.pratham()
// myHero.heyPratham()
//heroPower.heyPratham()

// Inheritance

const User={
    name:"Vipul",
    email:"desai@gmail.com"
}

const Teacher={
    makevideos:true
}

const TeachingSupport={
    isAvailable:false
}

const TASuppport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser="Rahul"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}
anotherUser.trueLength()

"Pratham".trueLength()
"Coffee".trueLength()