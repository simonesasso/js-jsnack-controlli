 /* L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. */

// faccio inserirre il primo numero e valorizzo la relativa variabile
var primoNum = parseInt(prompt("inserisci il primo numero"));
// faccio inserirre il secondonumero e valorizzo la relativa variabile
var secondoNum = parseInt(prompt("inserisci il secondo numero"));
// comparo il numero e stampo il maggiore
if(primoNum > secondoNum){
  document.getElementById('my-id').innerHTML = "Il numero maggiore è " +  primoNum;
}else if(primoNum < secondoNum){
  document.getElementById('my-id').innerHTML = "Il numero maggiore è " + secondoNum;
}else if (primoNum == secondoNum) {
  document.getElementById('my-id').innerHTML = "I due numeri sono uguali";
}
