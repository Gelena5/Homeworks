//  ეტაპი პირველი let i = 0; შევქმენით ცვლადი
// ეტაპი მეორე i < 5 პირობა (სანამ ეს პირობა ჭეშმარიტია ციკლი მეორდება)
// ეტაპი მესამე i++ i ცვლადის მნიშვნელობას ემატება 1 (სხვა შესაძლო ვარიანტები i+=2, i-=2, i*=2, i/=2)
for(let i = 0; i <= 5; i++){
    console.log(i)//იწყება i-ის მნიშვნელობით ანუ 0 და ემატება ერთ ერთი სანამ პირობა არ შესრულდება
}



let num = 10

if (num % 2 == 0){
    console.log('The number is even')
} else if (num % 2 != 0){
    console.log('The number is odd')
} else {
    console.log('The number is 0')
}



const firstname = 'Nika'

if (firstname == 'Nika'){
    console.log('Hello admin Nika')
} else if (firstname == 'Ani'){
    console.log('Hello admin Ani')
} else {
    console.log('Hello user')
}



for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i + " Even")
    } else if(i % 2 != 0){
        console.log(i + ' odd')
    }
    else{
        console.log('რაგაცა ნიტოააა :D')
    }
}


let num1 = 0//for-ის გან განსხვავებით ცვლადი გარეთ იქმნება

while (num1 <= 50) {//იქმნება პირობა 
    console.log(num1);//ცონსოლში რა გამოაქ
    num1 += 5//პირობაში მითითებულ რიცხვს რამდენი ემატება
}


let correctPass = 'nika123';
let isCorect = false;

while(isCorect != true){
    let userInput = prompt('Enter your password');
    console.log(userInput)
    if (userInput == correctPass){
        console.log("Successfully logged in");
        isCorect = true;
    }else{
        console.log("Try again");
    }
}
console.log("the end");



