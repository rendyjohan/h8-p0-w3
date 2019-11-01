//Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var arrInput;
var tglLahir;
var tglSort;
var bln;
var uruttgl;
var potongNama;

function dataHandling2(arrInput) {
    arrInput.splice(1, 1, "Roman Alamsyah Elsharawy");
    arrInput.splice(2, 1, "Provinsi Bandar Lampung");
    arrInput.splice(4, 1);
    arrInput.splice(4, 2, "Pria", "SMA Internasional Metro");
    console.log(input);
    
    tglLahir = arrInput[3].split('/');
    console.log(switchBln(tglLahir));
    var tglSort = tglLahir;
    console.log(sortDescending(tglSort));
    console.log(tglLahir.join('-'));
    
    potongNama = arrInput[1];
    console.log(potongNama.slice(0,14));
    
}

function switchBln(bln) {
  switch(bln[1]) {
    
    case '01': {return 'Januari';}
    case '02': {return 'Februari';}
    case '03': {return 'Maret';}
    case '04': {return 'April';}
    case '05': {return 'Mei';}
    case '06': {return 'Juni';}
    case '07': {return 'Juli';}
    case '08': {return 'Agustus';}
    case '09': {return 'September';}
    case '10': {return 'Oktober';}
    case '11': {return 'November';}
    case '12': {return 'Desember';}
  }
  console.log(bln[1]);
}

function sortDescending(uruttgl) {
    var result = uruttgl.sort(function(a,b) { 
        return b-a});
    return result;
}

dataHandling2(input);





/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */