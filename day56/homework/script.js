// 1
function litres(time) {
    return Math.floor(time * 0.5);
  }

// 2
function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    }
    else {
      return n * m
    }
}
  
// 3
function grow(x){
    return x.reduce((result, i) => result * i, 1);
  }

// 4
function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < '5') {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}

// 5
function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}

// 6
String.prototype.toJadenCase = function () {
    var newStr = "";
    
    this.split(" ").forEach(function(s) { 
        newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
    });
  
    return newStr.substr(1);
  }

// 7
function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }

    const minIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
}

// 8
function solution(number) {
    if (number < 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// 9
function likes(names) {
    const numLikes = names.length;
    if (numLikes === 0) {
        return "no one likes this";
    } else if (numLikes === 1) {
        return `${names[0]} likes this`;
    } else if (numLikes === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numLikes === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${numLikes - 2} others like this`;
    }
}

// 10
function isPangram(sentence) {
    const sentenceLower = sentence.toLowerCase();
    
    const letters = new Set();
    
    for (let char of sentenceLower) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }
    return letters.size === 26;
}
