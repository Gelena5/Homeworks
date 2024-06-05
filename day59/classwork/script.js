console.log("5" + "5")// 55
console.log("5" - "5")// 0
console.log("5" * "5")// 25
console.log("5" / "5")// 1


console.log(Number("11.11"))// 11.11
console.log(parseInt("55" + 55))// 110
console.log(parseFloat("55" + 5.5))// 
console.log(String(55 + 55))// "5555"



function mathProcess() {
    var firstNum = parseFloat(document.getElementById("input1").value);
    var secondNum = parseFloat(document.getElementById("input2").value);
    var math = String(document.getElementById("input3").value);
    var p = document.getElementById("p1");

    if (math == "+") {
        p.textContent = firstNum + secondNum;
    }
    else if (math == "-") {
        p.textContent = firstNum - secondNum;
    }
    else if (math == "*") {
        p.textContent = firstNum * secondNum;
    }
    else if (math == "/") {
        p.textContent = firstNum / secondNum;
    }
    else {
        p.tectContent = "Invalibe operation"
    }
}
