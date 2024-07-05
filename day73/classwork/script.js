// დავალება 1
const arrayConstructor = new Array('nika', 'saba', 'lika');// მასივის შექმნის პირველი გზა

const arrayLiteral = ['lasha', 'gio', 'andro'];// მასივის შექმნის მეორე გზა

console.log(arrayConstructor);
console.log(arrayLiteral);

arrayConstructor.push('BMW');// დამატება
arrayLiteral.push('Mercedes');// დამატება

console.log(arrayConstructor);
console.log(arrayLiteral);

let removedFromConstructor = arrayConstructor.pop();// წაშლა
let removedFromLiteral = arrayLiteral.pop();// წაშლა

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




const names1 = ['nika', 'luka', 'gio']
const names2 = ['ani', 'lile', 'mari']

const names3 = names1.concat(names2)// კონსოლში დაიბეჭდოს როგორც მასივი

console.log(names3);