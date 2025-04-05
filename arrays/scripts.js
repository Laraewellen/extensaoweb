//Array
let numeros = [10, 20, 30, 40];
let nomes = ["Ana", "Maria", "Joao"];

console.log(numeros);
console.log(nomes);

let lista = [];
lista[0] = "item 1";
lista[1] = "item 2";
console.log(lista);
console.log(lista[1]);

let cores = new Array("Vermelho", "Azul", "Verde");
console.log(cores);

//metodos
numeros.push(50); //adiciona numero no final
console.log(numeros);

numeros.unshift(0); //adiciona numero no inicio
console.log(numeros);

numeros.splice(1, 0, 5); //adiciona numero no no meio
console.log(numeros);

numeros.pop();         //remove ultimo elemento
console.log(numeros);

numeros.shift();  //remove primeiro elemento
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);
