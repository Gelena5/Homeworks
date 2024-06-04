// დავალება 1
function changeNames() {
    document.getElementById("name1").textContent = 'ladi';
    document.getElementById("name2").textContent = 'giorgi';
    document.getElementById("name3").textContent = 'nika';
}


// დავალება 2
let count = 0;
const counterElement = document.getElementById('counter');

function decrement() {
   count--;
   updateCounter();
}

function reset() {
   count = 0;
   updateCounter();
}

function increment() {
   count++;
   updateCounter();
}

function updateCounter() {
    counterElement.textContent = count;
}


//დავალება 3
function green() {
    let col = document.getElementById("color");
    col.style.color="green";
}

function red() {
    let col = document.getElementById("color");
    col.style.color="red";
}

function yellow() {
    let col = document.getElementById("color");
    col.style.color="yellow"
}


//დავალება 4

car = {
    brand: "BMW",
    model: "M4",
    year: "2024",
    color: "black",
    allAboutCar: function() {
        console.log(car.brand + " " + car.model + " " + car.year + " " + car.color)
    }
};

car.allAboutCar();