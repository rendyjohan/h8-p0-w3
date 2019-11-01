//Logic Challenge - Mencari Mean

function cariMean(arr) {
    // you can only write your code here!
    var jumlah = 0;

    for (var i=0; i<arr.length; i++){
        jumlah += arr[i];
    }
    return Math.round (jumlah/arr.length)
}


  // TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


/* Pseudo
1. tentukan berapa banyak jumlah Array
2. lakukan loop masing2 angka yang ada dalam array sebesar length
3. jumlahkan angka2 yang ada di dalam array 
4. jumlah tersebut dibagi dengan length dalam array
5. console log, lakukan input angka yang ditentukan
by: Rendy
*/