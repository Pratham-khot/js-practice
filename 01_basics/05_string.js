const name="pratham"
const repoCount=50

//console.log(name + " " +repoCount + " value");..actually this is old way adding string while printing

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this is called string interpolation
console.log(name.toUpperCase());
console.log(name);
console.log(name.charAt(0))
console.log(name.indexOf("p"))
console.log(name.substring(0,4))
const newName="   Ronit         "
console.log(newName);
console.log(newName.trim());
const url ="https://pratham.com/pratham%21khot"
console.log(url.replace('%21','_'))
console.log(url.includes('khot'));

console.log(name.startsWith('p'));
