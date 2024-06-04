// დავალება 1

const textInput = document.getElementById("text")
const colorInput = document.getElementById("color")
const fontSizeInput = document.getElementById("fontSize")
const fontWidthInput = document.getElementById("fontWidth")

function createParagraph() {
    document.getElementById("p1").textContent = textInput.value;
    document.getElementById("p1").style.color = colorInput.value;
    document.getElementById("p1").style.fontSize = fontSizeInput.value;
    document.getElementById("p1").style.fontWeight = fontWidthInput.value;
}


// დავალება 2

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