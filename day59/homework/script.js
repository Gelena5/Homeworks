// 1. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი string და ერთი number. თქვენი დავალებაა, რომ ამ ფუნქციაში მოახდინოთ +, -, *, / ამ ელემენტებზე და კონსოლში დაბეჭდოთ ეს შედეგები.
function math() {
    console.log(5 + "5")// 55
    console.log(5 - "5")// 0
    console.log(5 * "5")// 25
    console.log(5 / "5")// 1
}
math()

//2. შექმენით ფუნქცია, რომელიც მომხმარებელს შეეკითხება ტექსტს, ფერს და background ფერს. მოწოდებული ინფორმაციით გამოიტანეთ ერთი პარაგრაფი, რომლის ტექსტიც იქნება მომხმარებლის მიერ მოწოდებული, ფერებიც შესაბამისად გამოტანილი.
function createParagraph() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var p = document.getElementById("p1")
    var form = document.getElementById("form")

    p.textContent = input1
    p.style.color = input2
    form.style.backgroundColor = input3
}

//3. შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვითი მნიშვნელობა. ამ ორ რიცხვს შორის მოახდინეთ შემდეგი შედარებები: >, >=, <, <=, ==, != და დაბეჭდეთ ყველა შედეგი კონსოლში.
function comparisons() {
    console.log(5 > 1)
    console.log(5 >= 5)
    console.log(5 < 6)
    console.log(5 <= 6)
    console.log(5 == 5)
    console.log(5 != 6)
}
comparisons()

//4. შექმენით ფუნქცია, რომელსაც გადაეცემა ელემენტი, მის მონაცემთა ტიპს არ აქვს მნიშვნელობა. ფუნქციაში გამოიყენეთ parseInt, parseFloat ამ ელემენტზე და დაბეჭდეთ შედეგები. ფუნქცია გმოიძახეთ რამდენიმეჯერ და გადაეცით სხვადასხვა პარამეტრები.
function mathematiclOperations(value) {
    const intValue = parseInt(value)
    const floatValue = parseFloat(value)

    console.log("parseInt: " + intValue)
    console.log("parseFloat: " + floatValue)
}

mathematiclOperations(5)
mathematiclOperations(5.5)
mathematiclOperations(true)
mathematiclOperations("5")

//5. html-ის დოკუმენტში აიღეთ ერთი ღილაკი, რომელსაც დაკლიკებისას შეეცვლება ფერი. ეს გააკეთეთ სამნაირი js-ს გზით: inline, internal, external
function changeColor2() {
    var btn1 = document.getElementById("btn1")

    btn1.style.backgroundColor = 'green'
}