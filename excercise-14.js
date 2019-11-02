// Logic Challenge - Mengelompokkan Angka

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var hasilKelompokAngka = [];
    for (var i=0; i<3; i++){
    hasilKelompokAngka.push ([]);
    }

    for (var j=0; j<arr.length; j++){
        if (arr[j] %3 ===0){
            hasilKelompokAngka[2].push(arr[j]);
        } else if (arr[j] %2 !== 0){ 
            hasilKelompokAngka[1].push(arr[j]);
        } else if (arr[j] %2 === 0){
            hasilKelompokAngka[0].push(arr[j]);
        }
        // console.log(arr[j]);
    }
    return hasilKelompokAngka;
}
  
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]