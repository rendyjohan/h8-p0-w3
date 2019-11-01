//Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    // you can only write your code here!

    var pisahDigit = num.toString().split('');
    var num1Arr = [];
    
    for (var i =0; i < pisahDigit.length -1 ; i ++){
        var duaDigit = pisahDigit[i] + pisahDigit[i +1];
        num1Arr.push(duaDigit);
    }
    return num1Arr.sort(function(a, b){return b - a})[0];
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// tentukan berapa panjang/digit angka
