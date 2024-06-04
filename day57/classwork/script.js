const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input")
const btn = document.getElementById("button")

function getValuses() {
    console.log(nameInput.value)
    console.log(emailInput.value)
}

let myInfo = {
    name: "nika",
    email: "ngelenidze15@gmail.com",
    work:{
        money: 10000,
        workTime: "one month"
    }
}

myInfo.work.money = 20000
myInfo.work.workTime = "two month"

console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo.email)
console.log(myInfo.work)
console.log(myInfo.work.money)
console.log(myInfo,work.workTime)