// 1
function firstNonRepeatingLetter(s) {
    const lower_s = s.toLowerCase();
    
    for(let i = 0; i < s.length; i++){
      if(lower_s.indexOf(lower_s[i]) === lower_s.lastIndexOf(lower_s[i])){
        return s[i]
      }
    }
    
    return ""
}


// 2
function descendingOrder(n){
    const str_n = String(n);
    const numbers = [];
    
    for(let i = 0; i < str_n.length; i++){
      numbers.push(Number(str_n[i]))
    }
    
    numbers.sort(function(a, b) {return b - a})
    
    let result = '';
    
    for(let i = 0; i < numbers.length; i++){
      result += String(numbers[i]);
    }
    
    return Number(result)
    
}


// 3
function number9(n){
    let count = 0;
    let factor = 1;
    let current = n;
    
    while (current > 0) {
        let lowerNumbers = n - (current * factor) + 1;
        let currentDigit = Math.floor(current % 10);
        let higherNumbers = Math.floor(n / (factor * 10));
        
        if (currentDigit < 9) {
            count += higherNumbers * factor;
        } else if (currentDigit == 9) {
            count += higherNumbers * factor + lowerNumbers;
        } else {
            count += (higherNumbers + 1) * factor;
        }
        
        factor *= 10;
        current = Math.floor(current / 10);
    }
    
    return count;
}


// 4
function getCount(str) {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        count++;
      }
    }
    
    return count;
  }