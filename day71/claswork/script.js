const car1 = {
    brand: "BMW",
    model: "M4",
    maxSpeed: 309,
    curentSpeed: 0,
    
    //acceleration: function(){
    //    this.curentSpeed += 10;
    //    console.log(this.curentSpeed, "KM/H");
    //}
    acceleration(){//ობიექტში ფუნქცია
        this.curentSpeed += 10;
        console.log(this.curentSpeed, "KM/H");
    }
    
}
car1.acceleration();
console.log(car1);
car1.model = 'M3'//შეცვლა
car1.color = "black"//დამატება
delete car1.maxSpeed//წაშლა
console.log(car1)


var car = {
    brend: "BMW",
    model: "M4",
    currentSpeed: 0,
    maxSpeed: 309,
    
    //მომატება 10-ის
    acceleration() {
        if (this.currentSpeed + 10 <= this.maxSpeed) {
            this.currentSpeed += 10;
            return
        } else {
            console.log("Car CANNOT move faster");
        }
    },
    //მოაკლებს 10-ს
    decceleration(){
        if(this.currentSpeed - 10 >= 0) {
            this.currentSpeed -= 10;
            console.log("Car isn't moving");
        }else {
            
        }
    }
}

console.log(car)
car.acceleration()
car.acceleration()
car.acceleration()
car.decceleration()

delete car.model
console.log(car)





//ობიექტების სტრუქტურის შექმნა
function Accaunt(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}
//ობიექტის პარამეტრების შექმნა || თვითონ ობიეცტის შექმნა
const acc1 = new Accaunt("Nika", 'Gelenidze', 'ngelenidze15@gmail.com')
const acc2 = new Accaunt("Demetre", 'Gelenidze', 'dgelenidze15@gmail.com')

console.log(acc1)
console.log(acc2)




function Car(model, maxSpeed, currentSpeed){
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed
    
    this.acceleration = function(){
        if (this.currentSpeed + 10 <= this.maxSpeed) {
            this.currentSpeed += 10;
        } else {
            console.log("Car CANNOT move faster");
        }
    },
    this.decceleration = function(){
        if(this.currentSpeed - 10 >= 0) {
            this.currentSpeed -= 10;
            console.log("Car isn't moving");
        }else {
            
        }
    }
}

var car1 = new Car("BMW", '309', 0)

car1.acceleration();
console.log(car1.currentSpeed);
car1.decceleration();
console.log(car1.currentSpeed);

var car2 = new Car("Mercedes", '309', 0)

car2.acceleration();
console.log(car2.currentSpeed);
car2.decceleration();
console.log(car2.currentSpeed);

var car3 = new Car("Bugat", '309', 0)

car3.acceleration();
console.log(car3.currentSpeed);
car3.decceleration();
console.log(car3.currentSpeed);

var car4 = new Car("Ferar", '309', 0)

car4.acceleration();
console.log(car4.currentSpeed);
car4.decceleration();
console.log(car4.currentSpeed);

var car5 = new Car("lamborgin", '309', 0)

car5.acceleration();
console.log(car5.currentSpeed);
car5.decceleration();
console.log(car5.currentSpeed);