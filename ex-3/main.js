// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
// chiedo di inserire i cinque numeri
var num1 = parseInt(prompt("inserisci il primo numero"));
var num2 = parseInt(prompt("inserisci il secondo numero"));
var num3 = parseInt(prompt("inserisci il terzo numero"));
var num4 = parseInt(prompt("inserisci il quarto numero"));
var num5 = parseInt(prompt("inserisci il quinto numero"));
// sommo il numero e stampo il risultato
var risultato = num1 + num2 + num3 + num4 + num5;
document.getElementById('my-id').innerHTML = "il risultato è " + risultato;
