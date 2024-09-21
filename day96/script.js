// 1. Set-ის შექმნა უნიკალური რიცხვებით
const numbers = [1, 2, 3, 2, 4, 3, 5];
const uniqueSet = new Set();

numbers.forEach(num => {
  if (!uniqueSet.has(num)) {
    uniqueSet.add(num);
  }
});

console.log("უნიკალური რიცხვების Set:", uniqueSet);

// 2. Map-ის შექმნა და ელემენტების დამატება
const myMap = new Map();
myMap.set("სახელი", "გიორგი");
myMap.set("ასაკი", 25);
myMap.set("ქალაქი", "თბილისი");

console.log("Map ელემენტებით:", myMap);

// 3. Map-ის შექმნა, დამატება და წაშლა
const fruitsMap = new Map();
fruitsMap.set("ვაშლი", 5);
fruitsMap.set("ბანანი", 3);
fruitsMap.set("მსხალი", 2);

console.log("თავდაპირველი Map:", fruitsMap);
fruitsMap.delete("ბანანი");
console.log("Map ბანანის წაშლის შემდეგ:", fruitsMap);

// 4. Set-ის შექმნა, დამატება და გასუფთავება
const colorsSet = new Set();
colorsSet.add("წითელი");
colorsSet.add("მწვანე");
colorsSet.add("ლურჯი");

console.log("თავდაპირველი Set:", colorsSet);
colorsSet.clear();
console.log("გასუფთავებული Set:", colorsSet);

// 5. CollectionManager კლასი
class CollectionManager {
  constructor() {
    this.myMap = new Map();
    this.mySet = new Set();
  }

  addToMap(key, value) {
    this.myMap.set(key, value);
  }

  removeFromMap(key) {
    this.myMap.delete(key);
  }

  addToSet(item) {
    this.mySet.add(item);
  }

  clearSet() {
    this.mySet.clear();
  }

  showMap() {
    console.log("Map შიგთავსი:");
    this.myMap.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  }

  showSet() {
    console.log("Set შიგთავსი:");
    this.mySet.forEach(item => {
      console.log(item);
    });
  }
}

// CollectionManager-ის გამოყენების მაგალითი
const manager = new CollectionManager();

manager.addToMap("სახელი", "ანა");
manager.addToMap("ასაკი", 30);
manager.addToSet("წითელი");
manager.addToSet("მწვანე");

manager.showMap();
manager.showSet();

manager.removeFromMap("ასაკი");
manager.clearSet();

console.log("Map და Set ცვლილებების შემდეგ:");
manager.showMap();
manager.showSet();