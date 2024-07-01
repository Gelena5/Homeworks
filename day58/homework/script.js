// დავალება 1
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const div = document.getElementById("change-div");
const p = document.getElementById("change-p")
const btn = document.getElementById("btn");

function changeDiv(){
    div.style.width = widthInput.value + "px";
    div.style.height = heightInput.value + "px";
    div.style.backgroundColor = colorInput.value;
    p.textContent = textInput.value;

}


// დავალება 2
const myInfo = {
    firstname: "nika",
    lastname: "gelenidze",
    addres: {
        country: "georgia",
        city: "Tbilisi"
    }
}

myInfo.addres.city = "Kutaisi"

console.log(myInfo)