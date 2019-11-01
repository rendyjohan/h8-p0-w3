//Logic Challenge - Palindrome

function palindrome(kata) {
    // you can only write your code here!
    var tempKata = ('');
    for (i = kata.length - 1; i >= 0; i--) {
        tempKata = tempKata + kata[i];
    }
    return tempKata === kata;
}

  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false