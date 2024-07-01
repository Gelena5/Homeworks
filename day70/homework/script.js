//1. Write a function that takes a number as input and logs whether it is positive, negative, or zero.
function numType(num){
    if(num > 0){
        console.log(num + "-positive")
    }else if(num < 0){
        console.log(num + "-negative")
    }else{
        console.log("The number is zero")
    }
}
numType(5)
numType(-5)
numType(0)
console.log(" ")


//2. Write a function that determines if a number is even or odd and logs the result.
function numCheck(num){
    if(num % 2 == 0){
        console.log(num + "-even")
    }else if(num % 2 !=0){
        console.log(num + "-odd")
    }else{
        console.log("Something is wrong")
    }
}
numCheck(5)
numCheck(6)
console.log(" ")



//3. Write a function that checks if a given year is a leap year and logs the result.
function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + " is a leap year")
    }else{
        console.log(year + " isn't leap year")
    }
}
leapYear(2000)
leapYear(1500)
leapYear(2024)
console.log(" ")



//4. Write a function that takes two numbers as parameters and returns the larger one.
function largerNum(num1,num2){
    if(num1 > num2){
        console.log(num1 + ' is larger')
    }else{
        console.log(num2 + " is larger")
    }
}
largerNum(5,7)
largerNum(7,5)
console.log(" ")



//5. Write a function that takes three numbers as parameters and returns the smallest one.
function smallestNum(num1,num2,num3){
    if(num1 < num2 & num1 < num3){
        console.log(num1 + ' is smallest')
    }else if(num2 < num1 & num2 < num3){
        console.log(num2 + " is smallest")
    }else{
        console.log(num3 + ' is smallest')
    }
}
smallestNum(3,2,5)
smallestNum(5,6,8)
smallestNum(9,999,99)
console.log(" ")



//1. Create an object representing a person with properties like name, age, and city.
let person = {
    name: 'Nika',
    age: 16,
    city: 'Tbilisi'
}
console.log(person)
console.log(" ")



//2. Write code to access and log the name and age of the person object created in task 1.
console.log(person.name)
console.log(person.age)
console.log(" ")



//3. Add a property for email to the person object and set its value.
person = {
    name: 'nika',
    email: 'ngelenidze15@gmail.com'
}
console.log(person.email)
console.log(" ")



//4. Create an object representing a car with properties like make, model, and an owner object with properties like name and age.
var car = {
    name: 'BMW',
    model: 'M4',
    age: 2023,
}
console.log(car.name)
console.log(car.model)
console.log(" ")



//5. Write code to access and log the owner's name and age of the car object created in task 4.
console.log(car.model)
console.log(car.age)
console.log(" ")



//1. Write a while loop that logs numbers from 1 to 10.
let num = 1
while(num <= 10){
    console.log(num)
    num++
}
console.log(" ")



//2. Write a while loop that logs numbers from 10 down to 1.
num = 10
while(num >= 0){
    console.log(num)
    num--
}
console.log(" ")



//3. Write a while loop to calculate the factorial of a given number (n).
let n = 50
let result = 1
while(n > 0){
    result *= n;
    n--
}
console.log('The factorial of ' + n + ' is ' + result);
console.log(" ")



//5. Write a while loop that reverses a given number (n). For example, input 123 should output 321.
n = 3457
var reverse = 0
while(n > 0){
    var reminder = n % 10;
    reverse = reverse * 10 + reminder;
    n = Math.floor(n / 10)
}
console.log(reverse)
console.log(" ")



//1. Write a for loop that logs numbers from 1 to 10 to the console.
for(i = 0; i <= 10; i++){
    console.log(i)
}
console.log(" ")



//2. Write a for loop that logs even numbers between 1 and 20.
for(i = 0; i <= 20; i+=2){
    console.log(i + ' Even')
}
console.log(" ")



//3. Write a for loop that calculates and logs the sum of numbers from 1 to 100.
var x = 0
for(i = 0; i <= 100; i++){
    x += i
}
console.log(x)
console.log(" ")



//4. Write a for loop that logs multiples of 5 up to 50.
for(i = 5; i <= 50; i += 5){
    console.log(i)
}
console.log(" ")



//5. Write a for loop that logs numbers from 10 down to 1.
for(i = 10; i >= 0; i--){
    console.log(i)
}
console.log(" ")



//1. Write a function addNumbers that takes two parameters and returns their sum.
function sum(num1, nun2){
    return num1 + nun2
}
console.log(sum(15,5))
console.log(" ")



//2. Write a function multiplyNumbers that takes two parameters and returns their product.
function multiplyNumbers(num1,num2){
    return num1 * num2
}
console.log(multiplyNumbers(5,5))
console.log(" ")



//3. Write a function calculateRectangleArea that takes width and height as parameters and returns the area of rectangle.
function calculateRectangleArea(height, weight){
    return height * weight
}
console.log(calculateRectangleArea(5,6))
console.log(" ")



//4. Write a function calculateCircleCircumference that takes the radius as a parameter and returns the circumference.
function calculateCircleCircumference(radius){
    var pi = 3.14
    return 2 * pi * radius
}
console.log(calculateCircleCircumference(25))
console.log(" ")



//5. Write a function isEven that takes a number as a parameter and returns true if it's even, false otherwise.
function isEven(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(isEven(5))