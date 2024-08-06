function addElement() {
    let name = prompt("add name:");
    if (name) {
        let newElement = document.createElement(name);
        newElement.textContent = name;
        document.getElementById("container").appendChild(newElement);
    }
}