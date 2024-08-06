// შეიქმნა ახალი ელემენტი
const newElement = document.createElement("div");

// დავამატოთ id-ი და შევცვალოთ textContent-ი
newElement.id = "myNewElement";
newElement.textContent = "hello world";

// დაემატა შექმნილი ელემენტი body-ში
document.body.appendChild(newElement);