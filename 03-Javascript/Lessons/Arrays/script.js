let array = [1, 4, 6, 2];
console.log(array);

let array2 = array;

array2[0] = 5;
console.log(array);
console.log(array2);
// array and array2 are referencing the same array in memory, so changes to one will affect the other.
// To create a copy of the array, we can use the spread operator or the slice method.

const arr = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Apu");
console.log(arr);
console.log(tamanho);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Apu");
console.log(arr);
console.log(tamanho);

// pop: Remove um elemento no final do array e devolve o elemento removido
const lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

// shift: Remove um elemento no começo do array e devolve o elemento removido
const firstElement = arr.shift();
console.log(arr);
console.log(firstElement);

// includes: Verifica se um certo elemento está presente no array
const hasBart = arr.includes("Bart");
console.log(hasBart);
const hasApu = arr.includes("Apu");
console.log(hasApu);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indexOfLisa = arr.indexOf("Lisa");
console.log(indexOfLisa);
const indexOfApu = arr.indexOf("Apu");
console.log(indexOfApu);

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const slicedArray = arr.slice(0, 4);
console.log(arr);
console.log(slicedArray);

let arr = [1, 2, 3, 6, 7, 9, 0];
let sliceElement = arr.slice(2, 6);
console.log(sliceElement); // Output: [3,6,7,9]
