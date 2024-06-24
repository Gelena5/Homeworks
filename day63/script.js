// დავალება 1
document.getElementById('bankForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        amount: document.getElementById('amount').value
    };

    console.log('Form:', formData);
});


// დავალება 2
let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

console.log(num1 + " მეტია " + num2 + "-ზე: " + (num1 > num2));
console.log(num1 + " ნაკლებია " + num2 + "-ზე: " + (num1 < num2));
console.log(num1 + " ტოლია " + num2 + "-ის: " + (num1 === num2));
console.log(num1 + " მეტია ან ტოლია " + num2 + "-ის: " + (num1 >= num2));
console.log(num1 + " ნაკლებია ან ტოლია " + num2 + "-ის: " + (num1 <= num2));
console.log(num1 + " არ არის ტოლი " + num2 + "-ის: " + (num1 !== num2));

// დავალება 3
let profile = {
    name: "nika",
    surname: "gelenidze",
    age: 16,
    birthday: "2008-01-15"
};

document.getElementById("name").textContent = profile.name;
document.getElementById("surname").textContent = profile.surname;
document.getElementById("age").textContent = profile.age;
document.getElementById("birthday").textContent = profile.birthday;

console.log("my profle object:", profile);


// დავალება 4
let თანხმობა = confirm("გსურთ სახლის შესახებ ინფორმაციის ნახვა?");

if (თანხმობა) {
    console.log("მადლობა თანხმობისთვის! აი ინფორმაცია სახლის შესახებ:");
    console.log("ეს არის ორსართულიანი სახლი 4 საძინებლით და 2 აბაზანით.");
    console.log("სახლს აქვს დიდი ეზო და გარაჟი 2 მანქანისთვის.");
} else {
    console.log("მადლობა, რომ დაინტერესდით. თუ გადაიფიქრებთ, შეგიძლიათ ნებისმიერ დროს დაგვიკავშირდეთ.");
}