 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga
 // faccio inserire la prima parola
 var primaParola = prompt("inserisci la prima parola");
// faccio inserire laseconda parola
 var secondaParola = prompt("inserisci la seconda parola");
 // mi assicuro che i valori che confronto siano numeri
 var lungParola1 = parseInt(primaParola.length);
 var lungParola2 = parseInt(secondaParola.length);
// confronto le due parole e le stampo nellordine giusto

if (lungParola1 > lungParola2) {
  document.getElementById("my-id").innerHTML = primaParola + " " + secondaParola;
}else if (lungParola1 < lungParola2) {
  document.getElementById("my-id").innerHTML = secondaParola + " " + primaParola;
}else if (lungParola1 == lungParola2) {
  document.getElementById("my-id").innerHTML = "le due parole sono lunghe uguali";
}
