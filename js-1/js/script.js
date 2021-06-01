var wordFirst = prompt();
var wordSecond = prompt();

var longFirst = wordFirst.length;
var longSecond = wordSecond.length;

if (longFirst === longSecond) {
    document.getElementById('lista').innerHTML = 'Sono uguali' + '+ wordSecond +' + '+ wordFirst';
} else if (longFirst > longSecond){
    document.getElementById('lista').innerHTML = wordSecond + ' ' +wordFirst;
} else{
    document.getElementById('lista').innerHTML = wordFirst + ' ' + wordSecond;
}