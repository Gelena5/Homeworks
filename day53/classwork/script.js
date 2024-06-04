// დავალება 1
function changeNames() {
    document.getElementById("name1").textContent = 'ladi';
    document.getElementById("name2").textContent = 'giorgi';
    document.getElementById("name3").textContent = 'nika';
}


car = {
    name: "BMW",
    model: "M4",
    start: function(){
        console.log("car is starting")
    },
    broke: function(){
        console.log("car is broken")
    }
}

car.start();
car.broke();




// დავალებები

function infoJoin(name,lastname,location){
    const result = name + " " + lastname + " " + location;
    return result;
}

console.log(infoJoin("Luka", "tskvatadze", "kutaisi"));


function ageCheck(age){
    console.log(age > 18);
    console.log(age < 18);
    console.log(age == 18);
}

ageCheck(21)