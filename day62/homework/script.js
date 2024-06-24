// დავალება 1
let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));

let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("პირველი რიცხვი: " + num1);
console.log("მეორე რიცხვი: " + num2);
console.log("ჯამი: " + sum);
console.log("სხვაობა: " + difference);
console.log("ნამრავლი: " + product);
console.log("განაყოფი: " + quotient);


// დავალება 2
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let welcomeMessage = "Welcome " + firstName + " " + lastName;

    alert(welcomeMessage);
});



// დავლაბა 3
function sumBetween(start, end) {
    let sum = 0;
    
    if (start > end) {
        [start, end] = [end, start];
    }
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(sumBetween(1, 5));
console.log(sumBetween(3, 7));
console.log(sumBetween(10, 5));