console.log('Hello TypeScript!');

/* Crea una variabile chiamata nome di tipo stringa e assegnale il tuo nome. */

const nome : string = "Umberto"
console.log(nome)

const eta : number = 28
console.log(eta)

function saluta(nome: string): string {
  return `Ciao, ${nome}!`;
}

console.log(saluta(nome));

const array : number[] = [1,2,3]
console.log(array)

const persona: {id:number; nome: string; eta: number } = {
  id: 1,
  nome: "Umberto",
  eta: 28
};

console.log(persona)

