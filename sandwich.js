let bread1=prompt('bread name');
let vegg1=prompt('whch veg');
let sauce = prompt ('which sauce');

function makeSandwich(bread,veggies,suces){
   let sandwich= bread +" bread with " + veggies +" "+ sauce+" ready";
    return sandwich;
}
let hello=makeSandwich(bread1,vegg1,sauce);
console.log(hello);
