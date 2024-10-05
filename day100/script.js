// დავალება 1
function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generator = infiniteNumbers();
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2


// დვალება 2
function* evenNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i += 2;
    }
}

const evenGen = evenNumbers();
console.log(evenGen.next().value); // 0
console.log(evenGen.next().value); // 2
console.log(evenGen.next().value); // 4


// დავალება 3
function* randomNumbers() {
    while (true) {
        yield Math.random();
    }
}

const randomGen = randomNumbers();
console.log(randomGen.next().value); // შემთხვევითი რიცხვი 0-სა და 1-ს შორის
console.log(randomGen.next().value); // კიდევ ერთი შემთხვევითი რიცხვი


// დავალება 4
function* letterGenerator(word) {
    for (let letter of word) {
        yield letter;
    }
}

const wordGen = letterGenerator("გამარჯობა");
console.log(wordGen.next().value); // "გ"
console.log(wordGen.next().value); // "ა"
console.log(wordGen.next().value); // "მ"


//დავალება 5
function* passwordGenerator() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += digits[Math.floor(Math.random() * digits.length)];
        }
        yield password;
    }
}

const passGen = passwordGenerator();
console.log(passGen.next().value); // მაგ.: "12345678"
console.log(passGen.next().value); // მაგ.: "87654321"


// დავალება 6
function* improvedPasswordGenerator() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ0123456789!@#$%^&*()_+';
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        yield password;
    }
}

const improvedPassGen = improvedPasswordGenerator();
console.log(improvedPassGen.next().value); // მაგ.: "a2გ$F9ჰZ"
console.log(improvedPassGen.next().value); // მაგ.: "Qწ3!მbNხ"