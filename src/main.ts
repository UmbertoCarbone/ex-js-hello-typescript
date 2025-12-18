console.log("Hello TypeScript!");

/* Crea una variabile chiamata nome di tipo stringa e assegnale il tuo nome. */

/* const nome: string = "Umberto";
console.log(nome);

const eta: number = 28;
console.log(eta);

function saluta(nome: string): string {
  return `Ciao, ${nome}!`;
}

console.log(saluta(nome));

const array: number[] = [1, 2, 3];
console.log(array);

const persona: { id: number; nome: string; eta: number } = {
  id: 1,
  nome: "Umberto",
  eta: 28,
};

console.log(persona);

type Utente = {
  nome: string;
  eta: number;
  professione?: string;
};
const utente: Utente = {
  nome: "Umberto",
  eta: 28,
};

const nomeMaiuscolo = utente.professione?.toUpperCase();

console.log(nomeMaiuscolo);


const utente2: Utente = {
  nome: "gianni",
  eta: 22

}

console.log(utente,utente2);

const tuttiGLiUtenti : Utente[] = [utente, utente2];

console.log(tuttiGLiUtenti); */

function modificaNumero(num: number,callback:(value:number)=> number): number{
  return callback(num)
  
}
function doppio(x: number){
  return x * 2
}
const result=(modificaNumero(5,doppio))
console.log(result)