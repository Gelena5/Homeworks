let person = {
    firstName: "Giorgi",
    lastName: "Giorgadze",
    age: 25
};

console.log("First person object:", person);

person.job = "programer";
person.hobbies = ["read", "swim", "trevel"];

console.log(person);

let additionalInfo = {
    firstName: "Nino",
    lastName: "Ninidze",
    address: "Tbilisi"
};

Object.assign(person, additionalInfo);

console.log("Object.assign()-ით განახლებული person ობიექტი:", person);

let { firstName, lastName, age, job, hobbies, address } = person;

console.log(firstName, lastName, age, job, hobbies, address);

let fruits = ["apple", "banana", "mashrum", "potato"];
let [firstFruit, secondFruit, ...restFruits] = fruits;

console.log(firstFruit, secondFruit, restFruits);