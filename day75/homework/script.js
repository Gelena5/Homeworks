//1.Write a JavaScript function to display the current date in the format "MM/DD/YYYY".
function date(){
    var d = new Date()
    console.log(d)
}
date()


//2.Create a script that shows the current time in the format "HH:MM"
function time() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var formattedTime = hours + ':' + minutes;
    
    console.log(formattedTime);
}
time();


//3.Write a function that takes a number(1-7) as input and returns the day of the week (e.g., "Monday", "Tuesday") for that number.
function weekDays(num){
    var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    if(num < 1 || num > 7){
        return 'Somethink is wrong'
    }
    
    return weekDay[num - 1]
}
console.log(weekDays(5))
console.log(weekDays(1))
console.log(weekDays(9))


//1.Write a function that generates a random integer between a specified minimum and maximum value.
function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNum(1, 10));


//2.Implement a function that takes a number as input and calculates its square root.
function calculateSquareRoot(num) {
    if (num < 0) {
        return 'something is wrong';
    }
    return Math.sqrt(num);
}
console.log(calculateSquareRoot(16));
console.log(calculateSquareRoot(-4));


//3.Write a function that rounds a given number to the nearest integer.
function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.5));
console.log(roundToNearestInteger(4.4));


//4.Implement a function that rounds down a given number to the nearest integer.
function roundDown(num) {
    return Math.floor(num);
}
console.log(roundDown(4.9));
console.log(roundDown(4.1));


//5.Write a function that rounds up a given number to the nearest integer.
function roundUp(num) {
    return Math.ceil(num);
}
console.log(roundUp(4.1));
console.log(roundUp(4.9));