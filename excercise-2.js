//Mengakses Nilai Dalam Array

function balikString(kata){
  
    var tempKata ='';
    
    for(var i=kata.length-1; i>=0; i--){
      tempKata=tempKata+kata[i];
    }
    return tempKata;
    
}
  
console.log(balikString('hello world!'));