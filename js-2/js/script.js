//comando con for
var somma = 0;

for (var i = 0; i < 5; i++){
    numero = parseInt(prompt('Inserisci un numero'));
    console.log(numero);
    somma = somma + numero;
    //somma += numero ------- forma abbreviata
    
}
document.getElementById('somma').innerHTML = somma;
console.log(somma);

//comando con while
/* var i = 0;

while (i<5){
    numero= parseInt(prompt('Inserisci un numero'));
    somma += numero;
    i++;
}
document.getElementById('somma').innerHTML = somma;
console.log(somma); */