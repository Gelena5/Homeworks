const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
        }

        myBox.style.left = `${x}px`;
        myBox.style.top = `${y}px`;
    }
});




document.addEventListener("keydown", event => {
    myBox.textContent = ";D"
    myBox.style.backgroundColor = "green"
});
document.addEventListener("keyup", event => {
    myBox.textContent = ":O";
});