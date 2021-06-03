//1. creare un array con i nomi degli invitati
var arrayInv = ["Eli", "Giacomo", "Cristina", "Luca"];

//2. chiedere all'utente il suo nome
var nomeUtente = prompt("Come ti chiami?");

var messaggioUtente = "Non puoi entrare";

//3. controllare se l'utente fa parte della lista invitati
for(var i = 0; i < arrayInv.length; i++){
    if(nomeUtente == arrayInv[i]){ //andrà ad analizzare tutti i nomi dentro l'array, basta mettere solo arrayInv[i]
        messaggioUtente = "Puoi entrare";
    }    
}

//4. comununicare all'utente se può entrare alla festa
alert("messaggioUtente");


//Metodo booleano
/* var messaggioUtente = false;

//3.
for(var i = 0; i < arrayInv.length; i++){
    if(nomeUtente == arrayInv[i]){
        messaggioUtente = true;
    }
}

//4.
if(messaggioUtente){
    alert("Puoi entrare");
} else if(!messaggioUtente){
    alert("Non puoi entrare")
} */


//while
var messaggioUtente = false;
var i=0;

//3.
while(!messaggioUtente && i < arrayInv.length){    //il while si traduce come: fino a quando il messaggioUtente è false, fai tutto quello che c'è tra le {}
    if(nomeUtente == arrayInv[i]){
        messaggioUtente = true;
    }
    i++;
}

//4.
if(messaggioUtente){
    alert("Puoi entrare");
} else if(!messaggioUtente){
    alert("Non puoi entrare")
}