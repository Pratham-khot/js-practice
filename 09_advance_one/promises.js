const promiseOne=new Promise(function (resolve,reject){
    setTimeout(function (){
        console.log("Async task completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise done");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 Completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 done");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Pratham",email:"khotpratham@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"Pratham",email:"khotpratham@gamil.com"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
        
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is either resolved or rejected..");
    
})