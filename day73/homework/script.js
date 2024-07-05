//1. Create an object to represent a book with properties for title, author, and year published.
let book = {
    title: 'Bed boys',
    author: 'Ivan De Kolio',
    yearPublished: 2024
}
console.log(book.title); 
console.log(book["author"]);


//2. Add a new property to an existing object.
book['numberOfPages'] = 2011
console.log(book); 


//3. Delete a property from an object.
delete book.title
console.log(book)


//4. Access and print the value of a property in an object.
console.log(book['yearPublished']);


//5. Check if a property exists in an object.
console.log("name" in book)
console.log("yearPublished" in book)
