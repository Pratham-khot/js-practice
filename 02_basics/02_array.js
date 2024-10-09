const marvel_heros=["Spiderman","thor","Ironman"]
const dc_heros=["superman","flash","spiderman"]
const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);
const newarr=[...marvel_heros,...dc_heros]
console.log(newarr);//spread method
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Pratham"))
console.log(Array.from("Pratham"))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
