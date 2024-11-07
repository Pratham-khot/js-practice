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

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"javascript",email:"pratham@gamil.com"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
        
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
         
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     //console.log(response)
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
    
// }
//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){    //here we can give any name data ,response or anything
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})
