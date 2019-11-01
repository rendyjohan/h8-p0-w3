//Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
    // you can only write your code here!
    for (i=0; i<num; i++){
        num++;

        var tempAngka = String(num);
        var pjg = tempAngka.length;
        var angka1 = ('');
        for (var j = pjg -1 ; j >=0; j--){
            angka1 += tempAngka[j];
        }
        if(tempAngka === angka1){
        return num;
        }
    }
}
  
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

