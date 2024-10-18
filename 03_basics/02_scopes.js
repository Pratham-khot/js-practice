let a = 300
if (true) {
    let a=10
    let b=20
    //console.log("Inner: ",a);
    
}
//console.log(a);
function one(){
    const username="Pratham"
    function two(){
        console.log(username);
        const website="YouTube"
    }
    //console.log(website);
    

two()
}
one()