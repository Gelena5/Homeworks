// 1. prompt-ის გამოყენებით მომხმარებელს შემოატანინეთ ორი რიცხვი - პირველ promt-ზე ერთი , მეორე prompt-ზე მეორე. თქვენი დავალებაა რომ საბოლოოდ ამ ორ რიცხვზე მოახდინოთ შემდეგი მათემატიკური მოქმედებები: +, -, *, /. Test case: 2, 4 - > 6, -2, 8, 0.5

let num1 = parseFloat(prompt("Enter first number:")) 
let num2 = parseFloat(prompt("Enter second number:"))

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)


// 2. შექმენით form, სადაც გექნებათ რამდენიმე input. ყველა input-ს უნდა გააჩნდეს id და value ატრიბუტები. submit-ის შემდეგ თქვენი დავალებაა, რომ ყველა input-ის მნიშვნელობა დაიბეჭდოს კონსოლში.




// 3. შექმენით ორი ინფუთი, ერთი ღილაკი და ერთი პარაგრაფი, სადაც არაფერი გეწერებათ. პირველ ინფუთში მომხმარებელმა უნდა შეიყვანოს ტექსტი, მეორეში კი ფერი. ღილაკზე დაჭერის შემდეგ ცარიელ პარაგრაფში უნდა გამოიტანოს პირველი ინფუთის ტექსტი, რომელსაც ექნება მეორე ინფუთში შეყვანილი ფერი. Test case: "This is GOA", "green" -> "This is GOA"(ეს ტექსტი მწვანეა)

function changeParagraph() {
    let getText = document.getElementById("input1").value;
    document.getElementById("p1").innerHTML = getText;

    let getColor = document.getElementById("input2").value;
    document.getElementById("p1").style.color = getColor;

    let getBackgroundColor = document.getElementById("input3").value;
    document.getElementById("body").style.backgroundColor = getBackgroundColor;
}