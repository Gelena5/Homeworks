// დავალება 1
function infoJoin(name, lastName, age, hobby){
    const info = 'My full name is ' + name + ' ' + lastName + '. I am ' + age + ' years old. I love playing ' + hobby + '.';
    return info
}

console.log(infoJoin('nika', 'gelenidze', 15, 'Football'))


// დავალება 2
function ageCheck(age){
    if (age > 18) {
        console.log('18 წელს გადაცილებული')
    }
    else if (age == 18) {
        console.log('ზუსტად 18 წლის')
    }
    else {
        console.log('18 წელზე ნაკლების')
    }
}
ageCheck(8)
ageCheck(18)
ageCheck(28)


// დავალება 3
function alerter(){
    alert("Clicked")
}


// დავალება 4
function colorChanger(){
    document.getElementById("p-1").style.color = "green";

}

// დავალება 5
function changeColor() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }
}
window.onload = function() {
    changeColor();
};