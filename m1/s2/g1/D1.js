/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
 I principali tipi di datatype sono:
 - Number: per inserimento di numeri;
 - String: per inserire sequenze di caratteri, usato generalmente per testi (posso applicare o apici singoli o le virgolette, indifferentemente);
 - Boolean: contiene o il valore 'true' o 'false' (si scrive senza virgolette o apici);
 - Undefined: quando non assumo nessun valore a una variabile o che essa non è definita;
 - Null: assenza intenzionale di un oggetto;
 - Oggetto: per inserire oggetti all'interno di parentesi graffe, sono insiemi di coppie chiave;
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'Giovanni';

console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
let somma = number1 + number2;

console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

nome = 'Casalino';

console.log(nome);

//const varcost = 0;
//varcost =1;
//D1.js:60 Uncaught TypeError: Assignment to constant variable.
//at D1.js:60:9

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'Jhon';

console.log(name1, name2);
console.log(name1 === name2);
console.log(name1.tolowercase == name2.tolowercase);