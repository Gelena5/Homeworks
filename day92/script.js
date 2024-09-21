// 1. მაქსიმალური მნიშვნელობის პოვნა spread ოპერატორით
function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log("მაქსიმალური მნიშვნელობა:", findMax(5, 2, 8, 1, 9));

// 2. 10-ზე დიდი რიცხვების ფილტრაცია
function filterGreaterThanTen(numbers) {
    return numbers.filter(num => num > 10);
}

console.log("10-ზე დიდი რიცხვები:", filterGreaterThanTen([5, 15, 3, 20, 8, 12]));

// 3. HTML და JavaScript კოდი სიტყვის მოსანიშნად
const html = `
<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <title>სიტყვის მონიშვნა</title>
</head>
<body>
    <p id="text">ეს არის ნიმუში ტექსტი, სადაც უნდა მოინიშნოს კონკრეტული სიტყვა.</p>
    <script>
        function highlightWord(word) {
            const text = document.getElementById('text');
            text.innerHTML = text.innerHTML.replace(
                new RegExp(word, 'gi'), 
                match => \`<mark>\${match}</mark>\`
            );
        }
        highlightWord('სიტყვა');
    </script>
</body>
</html>
`;

console.log("HTML კოდი სიტყვის მოსანიშნად:", html);

// 4. დუბლიკატების წაშლა სიიდან
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("უნიკალური ელემენტები:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 5. მინიმალური მნიშვნელობის პოვნა rest ოპერატორით
function findMin(...numbers) {
    return Math.min(...numbers);
}

console.log("მინიმალური მნიშვნელობა:", findMin(5, 2, 8, 1, 9));