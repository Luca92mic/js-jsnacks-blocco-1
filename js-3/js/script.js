var array = [];

for (var i = 0; i < 6; i++){
    var numero = parseInt(prompt());
    if (numero %2 !=0){
        array.push(numero);
    }
}
document.getElementById('risultato').innerHTML = numero;