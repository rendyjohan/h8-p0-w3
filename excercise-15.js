// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
    // you can only write your code here!
    var hasilKelompokHewan = [[]];
    var temp = 0 ;
    animals.sort();
    hasilKelompokHewan[0].push(animals[0]);


    for (var i=1; i<animals.length; i++){
        if (animals[i][0] === hasilKelompokHewan[temp][0][0]){
            hasilKelompokHewan[temp].push(animals[i]);
        } else {
            temp++;
            hasilKelompokHewan[temp] = [animals[i]]
        }
    }
    return hasilKelompokHewan;
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

/*
1. buat variabel baru untuk menampung hasil 
2. lakukan fungsi sort pada array, susun kata pertama sesuai abjad
3. masukkan animals pertama ke variabel hasil
3. lakukan looping jika huruf pertama animals sama dengan huruf pertama dalam array maka lakukan push ke variabel temp
4. jika nama animals dalam array memuat nama hewan yang di dalamnya ada abjad yang sama maka outputnya sama dengan huruf pertama dan tampung hasilnya dalam variabel baru temp.
5. lakukan return untuk menyimpan hasil
6. Panggil log function dengan isi array yang ditentukan untuk melakukan pengelompokan sesuai dengan abjad yang sama per kelompok array tersendiri.
*/