var d = new Date(2024, 6, 3, 9, 40, 40, 400);
console.log(d);

d = new Date(24 * 7 * 3 * 8942);
console.log(d);

d.toString();
console.log(d);

d = new Date(0);
console.log(d);

d.toString();
console.log(d);



// დავალება 1
setTimeout(function() {
    console.log('5 seconds passed')
}, 5000)


// დავალება 2
let second = 0
const interval1 = setInterval(function() {
    second++

    if(second == 60){
        clearInterval(interval1)
        console.log('Minut passed')
    }

    console.log(second,'second passed');
}, 1000)

// დავალება 3
const interval2 = setInterval(function(){
    const d = new Date()
    console.log(d.getSeconds())
}, 1000);



console.log(Math.round(3.7))
console.log(Math.floor(3.7))
console.log(Math.ceil(3.3))
console.log(Math.trunc(3.7))

console.log(Math.sign(-3))

console.log(Math.abs(-3))

console.log(Math.random() * 5)
console.log(Math.trunc(Math.random() * 5))