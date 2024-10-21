// if - else

if (2 === "2")
{
    //console.log("Executed");
    
}
else
{
    //console.log(`2 is not equal to this "2" because it is string`);
    
}
// if - else if

// const balance=1000

// if (balance <500)
// {
//     console.log(`Less than 500`);
// }
// else if(balance <750)
// {
//     console.log(`Less than 750`);
// }
// else if(balance <900)
// {
//     console.log(`Less than 900`);
// }
// else
// {
//     console.log(`Less than 1500`);
    
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard)
{
    console.log(`Allowed for Shopping`);
    
}
if (loggedInFromGoogle || loggedInFromEmail)
{
    console.log(`User logged in..`);
    
}