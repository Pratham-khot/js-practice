// Immediately Invoked Function Expressions (IIFE)

(function one(){//named iife
    console.log(`DB connected successfully`);
    //when we want to write two iife's then we need to give the semicolon after the first iife..
})();
((name) =>{
    console.log(`DB connected to ${name}`);
    
})("Pratham")