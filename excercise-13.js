// Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
    // you can only write your code here!
    //mencari posisi 0
    var posisiO = arr.indexOf('o');
    //mencari posisi x
    var posisiX =[];
    for(var i=0; i<arr.length; i++){
        if (arr[i] === 'x'){
            posisiX.push(i);
        }
    }

    //mencari jarak dari o ke x
    var jarakOKeX = [];
    for (var j=0; j<posisiX.length; j++){
        var bedaJarakOKeX = Math.abs(posisiX[j] - posisiO);
        jarakOKeX.push(bedaJarakOKeX);
    }
    if (jarakOKeX.length ===0){
        return 0;
    } else {
        var jarakTerdekat = jarakOKeX[0];
        for (var k=0; k<jarakOKeX.length; k++){
            if (jarakOKeX[k]<jarakTerdekat){
                jarakTerdekat = jarakOKeX[k];
            }
        }
    }
    return jarakTerdekat        
}
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


/*
1. Cari posisi 0 dalam array dengan menggunakan fungsi indexOf
2. Cari posisi x dalam array dengan membuat variabel baru, kemudian push dalam array.
3. lakukan looping perulangan untuk posisi x dalam array
3. Cari jarak dari 0 ke x jumlahnya berapa, buat variabel baru, kemudian push
4. lakukan looping perulangan untuk jarak dari 0 ke x dalam array
5. simpan dan return
6. Panggil log arr dengan isi array yang ditentukan untuk mengetahui jumlah jarak terdekat o ke x
*/