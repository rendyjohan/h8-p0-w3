// Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    // you can only write your code here!
var bagiDeretGeometri = arr[1] / arr[0];
var hasilDeretGeometri = true;
    // console.log(bagiDeretGeometri)
    for (var i=0; i<arr.length-1; i++){
        // console.log(arr[i+1]/arr[i])
        var tempBagi = arr[i+1] / arr[i];
        if (tempBagi !== bagiDeretGeometri){
            hasilDeretGeometri = false;
        }
    }
    return hasilDeretGeometri;
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

/*
1. Tentukan hasil bagi isi array ke-2 dengan isi array ke-1
2. Setelah mendapatkan hasil bagi tersebut, kemudian buatlah looping untuk memeriksa sebanyak jumlah isi array dengan length
3. Isi array yang mau diperiksa ditambahkan 1 untuk dibandingkan hasil baginya dengan isi array
4. jika hasil tersebut hasil baginya  tidak sama dengan hasil bagi pada nomor 1 maka hasilnya adalah false
5. Simpan atau return hasil tersebut
6. Panggil log arr dengan isi array yang ditentukan untuk mengetahui apakah true atau false 
*/

