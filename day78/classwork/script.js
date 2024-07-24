let p = document.querySelector('.p1');

setTimeout(function() {
    p.textContent = "CBA";
    p.style.color = "green";     
    p.style.backgroundColor = "black";
}, 3000);
//Document Object Model(DOM) არის HTML დოკუმენტის სტრუქტურის აღწერა ობიექტების სახით





// პოულობს ყველა ელემენტს 'text' კლასით.
const textElements = document.getElementsByClassName('text');
console.log(textElements);

//პოულობს ყველა <p> ელემენტს.
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

//პოულობს ელემენტს ID-ით 'mainContainer'.
const mainContainer = document.querySelector('#div');
console.log(mainContainer);

//პოულობს ყველა <li> ელემენტს 'myList' ID-ის მქონე სიაში.
const listItems = document.querySelectorAll('#myList li');
console.log(listItems);

//ცვლის სიის ყველა ელემენტის ფერს ლურჯზე.
for (let item of listItems) {
    item.style.color = 'blue';
}

//ამატებს ახალ კლასს 'big-title' სათაურის ელემენტზე.
const title = document.querySelector('.title');
title.classList.add('big-title');