function Animal(name, species, color, breed) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.breed = breed;
  
    this.makeSound = function() {
            if (this.species === "dog") {
            console.log(`${this.name} says: Woof!`);
        } else if (this.species === "cat") {
            console.log(`${this.name} says: Meow!`);
        } else {
            console.log(`${this.name} makes a sound.`);
        }
    };
  
    this.getLength = function() {
        const length = Math.floor(Math.random() * 100) + 20;
        console.log(`${this.name} is ${length} cm long.`);
    };
  
    this.getInfo = function() {
        console.log(`Name: ${this.name}, Species: ${this.species}, Color: ${this.color}, Breed: ${this.breed}`);
    };
}
  
const dog = new Animal("Buddy", "dog", "brown", "Labrador");
dog.makeSound();
dog.getLength();
dog.getInfo();
  
const cat = new Animal("Whiskers", "cat", "white", "Persian");
cat.makeSound();
cat.getLength();
cat.getInfo();