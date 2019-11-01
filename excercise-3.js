//Melakukan Looping Data Array

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arrInput){
  
    var tempBawah='';
    for(var i=0; i<=arrInput.length-1; i++){
      tempBawah
      
        var tempSamping='';
        for(var j=0; j<=i; j++){
        }
        console.log('Nomor ID:  '+arrInput[i][0]);
        console.log('Nama Lengkap:  '+arrInput[i][1]);
        console.log('TTL:  '+arrInput[i][2]+' '+arrInput[i][3]);
        console.log('Hobi:  '+arrInput[i][4]);
        console.log('');
    }
    return tempBawah;
}
  
console.log(dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]));