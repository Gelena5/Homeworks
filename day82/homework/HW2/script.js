// getElementById
console.log("getElementById examples:");
const main = document.getElementById("main");
console.log(main);
main.style.border = "1px solid black";
main.innerHTML += "<p>New paragraph</p>";

// getElementsByClassName
console.log("getElementsByClassName examples:");
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}
console.log("Number of paragraphs: " + paragraphs.length);

// getElementsByTagName
console.log("getElementsByTagName examples:");
const allP = document.getElementsByTagName("p");
console.log(allP);
for (let p of allP) {
    p.style.fontStyle = "italic";
}
console.log("Number of p tags: " + allP.length);

// querySelector
console.log("querySelector examples:");
const firstP = document.querySelector("p");
console.log(firstP);
firstP.style.fontWeight = "bold";
const innerDiv = document.querySelector(".inner");
innerDiv.style.backgroundColor = "lightgray";

// querySelectorAll
console.log("querySelectorAll examples:");
const allPQuery = document.querySelectorAll("p");
console.log(allPQuery);
allPQuery.forEach(p => p.style.margin = "10px");
console.log("Number of p elements: " + allPQuery.length);

// children
console.log("children examples:");
const mainChildren = main.children;
console.log(mainChildren);
console.log("Number of main's children: " + mainChildren.length);
mainChildren[0].style.textDecoration = "underline";

// firstElementChild
console.log("firstElementChild examples:");
const firstChild = main.firstElementChild;
console.log(firstChild);
firstChild.style.color = "red";
console.log("First child's text: " + firstChild.textContent);

// lastElementChild
console.log("lastElementChild examples:");
const lastChild = main.lastElementChild;
console.log(lastChild);
lastChild.style.border = "1px dashed gray";
console.log("Last child's class: " + lastChild.className);

// nextElementSibling
console.log("nextElementSibling examples:");
const secondElement = main.firstElementChild.nextElementSibling;
console.log(secondElement);
secondElement.style.fontSize = "18px";
console.log("Second element's text: " + secondElement.textContent);

// previousElementSibling
console.log("previousElementSibling examples:");
const previousElement = main.lastElementChild.previousElementSibling;
console.log(previousElement);
previousElement.style.textTransform = "uppercase";
console.log("Previous element's tag: " + previousElement.tagName);