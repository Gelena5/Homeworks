// დავალება 1
const arrayConstructor = new Array('nika', 'saba', 'lika');

const arrayLiteral = ['lasha', 'gio', 'andro'];

console.log(arrayConstructor);
console.log(arrayLiteral);

arrayConstructor.push('BMW');
arrayLiteral.push('Mercedes');

console.log(arrayConstructor);
console.log(arrayLiteral);

let removedFromConstructor = arrayConstructor.pop();
let removedFromLiteral = arrayLiteral.pop();

console.log(arrayConstructor);
console.log(arrayLiteral);

console.log(removedFromConstructor);
console.log(removedFromLiteral);


// დავალება 2
const num = [5, 12, 8, 3, 20, 15, 7, 10, 6, 18];

let bowl = 0;

for (let i = 0; i < num.length; i++) {
    bowl += num[i];
}

console.log("რიცხვების ჯამია:", bowl);


// დავალება 3
