let nomeUtente = prompt("qualè il tuo nome");

let cognomeUtente = prompt("qualè il tuo cognome?:");

let colore = prompt("qualè il tuo colore preferito?:");

const numero = 23;

text=(nomeUtente + " "+ cognomeUtente + " "+ colore + " "+ numero);

document.getElementById("answer").innerHTML = text;