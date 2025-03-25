/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
  const title = document.querySelector("body div h1");
  console.log(title);
  title.innerText = "Ecco il nuovo titolo della pagina";
};
changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  const changeTitle = document.querySelector("body div h1");
  changeTitle.classList.add("addClassToTitle");
};
addClassToTitle();
console.dir(addClassToTitle);

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/
const extraParagraph = document.createElement("p");
extraParagraph.innerText = "Aggiungo un paragrafo esterno a ogni div";
document.body.appendChild(extraParagraph);
console.log(extraParagraph);

const changePcontent = function () {
  const paragraphContent = document.querySelectorAll("body div p");
  console.log(paragraphContent);

  paragraphContent.forEach((paragraphContent, i) => {
    paragraphContent.innerText = "Ora è cambiato anche il contenuto dei paragrafi figli dei div";
  });
};
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  const urlToChange = document.querySelectorAll("body a");
  console.log(urlToChange);
  urlToChange.forEach((urlToChange, i) => {
    urlToChange.changeUrls = href = "https://www.google.com";
  });
};
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const changeSecondList = document.getElementById("secondList");
};

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/
const firstDiv = document.querySelector("div");
console.dir(firstDiv);

const addParagraph = function () {
  newParagraph = document.createElement("p");
  newParagraph.innerText = "Questo è il paragrafo dell'esercizio 6";
  firstDiv.appendChild(newParagraph);
};
addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {};

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {};

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {};

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {};

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {};

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {};

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {};
