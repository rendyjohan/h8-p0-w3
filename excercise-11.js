// Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisihDeretAritmatika = arr[1] - arr[0]; 
    var hasilDeretAritmatika = true;
    //console.log (selisihDeretAritmatika);
    for (var i=0 ; i<arr.length-1; i++){
    //console.log(arr[i+1]-arr[i]);
        var tempSelisih = arr[i+1] - arr[i];
        if (tempSelisih !== selisihDeretAritmatika){
            hasilDeretAritmatika = false;
        }
    }
    return hasilDeretAritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


/*
1. Tentukan selisih isi array ke-2 dengan  isi array ke-1
2. Setelah mendapatkan selisih tersebut, kemudian buatlah looping untuk memeriksa sebanyak jumlah isi array dengan length
3. Isi array yang mau diperiksa ditambahkan 1 untuk dibandingkan selisihnya dengan isi array
4. jika hasil tersebut selisihnya tidak sama dengan selisih pada nomor 1 maka hasilnya adalah false
5. Simpan atau return hasil tersebut
6. Panggil log arr dengan isi array yang ditentukan untuk mengetahui apakah true atau false 
*/

